import React, { useEffect } from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncFetchAnnouncements } from "../../store/reducers/announcement/announcementActionCreators";

const HomePage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );

  return (
    <>
      <Search />
      <Categories />
      <AnnouncementList
        title='Announcements'
        announcements={announcements}
        isLoading={isAnnouncementsLoading}
      />
    </>
  );
};

export default HomePage;
