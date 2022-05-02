import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncGetSingleAnnouncement } from "../../store/reducers/announcement/announcementActionCreators";

import { Wrapper } from "./AnnouncementPage.styles";
import userPreview from "../../assets/user.png";
import { BsStarFill } from "react-icons/bs";
import AnnouncementList from "../../components/Announcements/AnnouncementList";

const AnnouncementPage = () => {
  const { id: announcementId } = useParams();
  const { currentAnnouncement, currentAnnouncementUser, announcements } =
    useAppSelector((state) => state.announcement);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!announcementId) return;

    dispatch(asyncGetSingleAnnouncement(announcementId));
  }, [announcementId, dispatch]);

  if (!currentAnnouncement || !currentAnnouncementUser) return null;

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
            <div className='user-image'>
              <img src={userPreview} alt='user' />
            </div>
            <div className='info'>
              <h3 className='name'>{currentAnnouncementUser.name}</h3>
              <p className='register-date'>
                on WIX since {currentAnnouncementUser.createdAt}
              </p>
              <p className='rating'>
                {currentAnnouncementUser.averageRating}
                <span className='star'>
                  <BsStarFill />
                </span>
                ({currentAnnouncementUser.numOfComments})
              </p>
            </div>
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
          announcements={announcements}
          isLoading={false}
          limit={4}
          exceptions={[currentAnnouncement._id]}
        />
        <AnnouncementList
          title='Other posts'
          announcements={announcements}
          isLoading={false}
          limit={4}
          exceptions={[currentAnnouncement._id]}
        />
      </div>
    </Wrapper>
  );
};

export default AnnouncementPage;
