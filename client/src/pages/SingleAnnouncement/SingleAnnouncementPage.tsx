import React, { useEffect } from "react";

import Search from "../../components/Search/Search";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Loader from "../../components/UI/Loader/Loader";
import UserInfo from "../../components/UserInfo/UserInfo";
import Button from "../../components/UI/Button/Button";

import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  clearAnnouncements,
  clearCurrentAnnouncement,
} from "../../store/reducers/announcement/announcementSlice";
import { formatDate, scrollToTop } from "../../utils";
import {
  asyncGetAnnouncements,
  asyncGetSingleAnnouncement,
} from "../../store/reducers/announcement/announcementActionCreators";

import { Wrapper } from "./SingleAnnouncementPage.styles";

const AnnouncementPage = () => {
  const { id: announcementId } = useParams();

  const {
    announcements,
    isAnnouncementsLoading,
    singleAnnouncement,
    isSingleAnnouncementLoading,
    singleUserAnnouncements,
    isSingleUserAnnouncementsLoading,
  } = useAppSelector((state) => state.announcement);
  const { singleUser, isSingleUserLoading } = useAppSelector(
    (state) => state.user
  );

  const dispatch = useAppDispatch();
  const location = useLocation();
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.search !== "") {
      navigate(`/announcements${location.search}`);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!announcementId) return;
    scrollToTop();

    dispatch(asyncGetSingleAnnouncement(announcementId));
    dispatch(asyncGetAnnouncements(""));

    return () => {
      dispatch(clearAnnouncements());
      dispatch(clearCurrentAnnouncement());
    };
  }, [announcementId, dispatch]);

  if (isSingleAnnouncementLoading || isSingleUserLoading) return <Loader />;

  if (!singleAnnouncement || !singleUser) {
    navigate("/");
    return null;
  }

  return (
    <Wrapper>
      <Search />
      <div className="top-content">
        <div className="top-left-content">
          <div className="left-announcement-image">
            <img src={`${singleAnnouncement.image}`} alt="announcement" />
          </div>
        </div>
        <div className="top-right-content">
          <div className="right-user">
            <UserInfo user={singleUser} />
          </div>
          <div className="right-description">
            <p className="right-publish-time">
              {`Published: ${formatDate(singleAnnouncement.createdAt)}`}
            </p>
            <h2 className="right-title">{singleAnnouncement.title}</h2>
            <p className="right-price">{singleAnnouncement.price}$</p>
            <h3>Description</h3>
            <p className="right-description-text">
              {singleAnnouncement.description}
            </p>
            <h3>Contacts</h3>
            <p>Email: {singleAnnouncement.email}</p>
            <p>Phone number: {singleAnnouncement.phoneNumber}</p>
          </div>
        </div>
      </div>
      <section className="announcements-list">
        {singleUserAnnouncements.length > 1 && (
          <AnnouncementList
            title="Other user posts"
            announcements={singleUserAnnouncements}
            isLoading={isSingleUserAnnouncementsLoading}
            limit={4}
            exceptions={[singleAnnouncement._id]}
            isGridView={true}
            ListButton={
              <Button
                onClick={() =>
                  navigate(`/announcements?creator=${singleUser._id}`)
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
            exceptions={[singleAnnouncement._id]}
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
