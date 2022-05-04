import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { useAppSelector } from "../../hooks/redux";

const UserPage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );

  return (
    <>
      <Search />
      <Filters />
      <AnnouncementList
        title='My Announcements'
        announcements={announcements}
        isLoading={isAnnouncementsLoading}
      />
    </>
  );
};

export default UserPage;
