import React, { useEffect } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncFetchAnnouncements,
  asyncGetSingleAnnouncement,
} from "../../store/reducers/announcement/announcementActionCreators";

import { Wrapper } from "./SingleAnnouncementPage.styles";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Loader from "../../components/UI/Loader/Loader";
import { formatDate, scrollToTop } from "../../utils";
import {
  clearAnnouncements,
  clearCurrentAnnouncement,
} from "../../store/reducers/announcement/announcementSlice";
import UserInfo from "../../components/UserInfo/UserInfo";
import Button from "../../components/UI/Button/Button";

const AnnouncementPage = () => {
  const { id: announcementId } = useParams();
  const {
    announcements,
    isAnnouncementsLoading,
    currentAnnouncement,
    isCurrentAnnouncementLoading,
    currentUserAnnouncements,
    isCurrentUserAnnouncementsLoading,
  } = useAppSelector((state) => state.announcement);
  const { currentUser, isCurrentUserLoading } = useAppSelector(
    (state) => state.user
  );
  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    scrollToTop();
  }, [announcementId]);

  useEffect(() => {
    if (!announcementId) return;

    dispatch(asyncGetSingleAnnouncement(announcementId));
    dispatch(asyncFetchAnnouncements(""));

    return () => {
      dispatch(clearAnnouncements());
      dispatch(clearCurrentAnnouncement());
    };
  }, [announcementId, dispatch]);

  useEffect(() => {
    if (location.search !== "") {
      navigate(`/announcements${location.search}`);
    }
  }, [searchParams]);

  if (isCurrentAnnouncementLoading) return <Loader />;

  if (!currentAnnouncement || !currentUser) return null;

  return (
    <Wrapper>
      <Search />
      <div className="top-info">
        <div className="left">
          <div className="announcement-image">
            <img
              crossOrigin="anonymous"
              src={`http://localhost:5000${currentAnnouncement.image}`}
              alt="announcement"
            />
          </div>
        </div>
        <div className="right">
          <div className="user">
            {isCurrentUserLoading ? (
              <Loader />
            ) : (
              <UserInfo user={currentUser} />
            )}
          </div>
          <div className="description">
            <p className="publish-time">
              {`Published: ${formatDate(currentAnnouncement.createdAt)}`}
            </p>
            <h2 className="title">{currentAnnouncement.title}</h2>
            <p className="price">{currentAnnouncement.price}$</p>
            <h3>Description</h3>
            <p className="description-text">
              {currentAnnouncement.description}
            </p>
            <h3>Contacts</h3>
            <p>Email: {currentAnnouncement.email}</p>
            <p>Phone number: {currentAnnouncement.phoneNumber}</p>
          </div>
        </div>
      </div>
      <section className="announcements">
        {currentUserAnnouncements.length > 1 && (
          <AnnouncementList
            title="Other user posts"
            announcements={currentUserAnnouncements}
            isLoading={isCurrentUserAnnouncementsLoading}
            limit={4}
            exceptions={[currentAnnouncement._id]}
            isGridView={true}
            ListButton={
              <Button
                onClick={() =>
                  navigate(`/announcements?creator=${currentUser._id}`)
                }
              >
                Show All
              </Button>
            }
          />
        )}
        {announcements.length !== 0 && (
          <AnnouncementList
            title="Other posts"
            announcements={announcements}
            isLoading={isAnnouncementsLoading}
            limit={4}
            exceptions={[currentAnnouncement._id]}
            isGridView={true}
            ListButton={
              <Button onClick={() => navigate(`/announcements`)}>Search</Button>
            }
          />
        )}
      </section>
    </Wrapper>
  );
};

export default AnnouncementPage;
