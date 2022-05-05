import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncFetchAnnouncements,
  asyncGetSingleAnnouncement,
} from "../../store/reducers/announcement/announcementActionCreators";

import { Wrapper } from "./SingleAnnouncementPage.styles";
import userPreview from "../../assets/user.png";
import { BsStarFill } from "react-icons/bs";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Loader from "../../components/UI/Loader/Loader";
import { scrollToTop } from "../../utils";
import {
  clearAnnouncements,
  clearCurrentAnnouncement,
} from "../../store/reducers/announcement/announcementSlice";

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

  if (isCurrentAnnouncementLoading) return <Loader />;

  if (!currentAnnouncement || !currentUser) return null;

  return (
    <Wrapper>
      <Search />
      <div className='top-info'>
        <div className='left'>
          <div className='announcement-image'>
            <img
              crossOrigin='anonymous'
              src={`http://localhost:5000${currentAnnouncement.image}`}
              alt='announcement'
            />
          </div>
        </div>
        <div className='right'>
          <div className='user'>
            {isCurrentUserLoading ? (
              <Loader />
            ) : (
              <>
                <div className='user-image'>
                  <img src={userPreview} alt='user' />
                </div>
                <div className='info'>
                  <h3 className='name'>{currentUser.name}</h3>
                  <p className='register-date'>
                    on WIX since {currentUser.createdAt}
                  </p>
                  <p className='rating'>
                    {currentUser.averageRating}
                    <span className='star'>
                      <BsStarFill />
                    </span>
                    ({currentUser.numOfComments})
                  </p>
                </div>
              </>
            )}
          </div>
          <div className='description'>
            <p className='publish-time'>
              Published: ${currentAnnouncement.createdAt}
            </p>
            <h2 className='title'>{currentAnnouncement.title}</h2>
            <p className='price'>{currentAnnouncement.price}$</p>
            <h3>Description</h3>
            <p className='description-text'>
              {currentAnnouncement.description}
            </p>
          </div>
        </div>
      </div>
      <div className='comments'>Commnets</div>
      <div className='announcements'>
        <AnnouncementList
          title='Other user posts'
          announcements={currentUserAnnouncements}
          isLoading={isCurrentUserAnnouncementsLoading}
          limit={4}
          exceptions={[currentAnnouncement._id]}
        />
        <AnnouncementList
          title='Other posts'
          announcements={announcements}
          isLoading={isAnnouncementsLoading}
          limit={4}
          exceptions={[currentAnnouncement._id]}
        />
      </div>
    </Wrapper>
  );
};

export default AnnouncementPage;
