import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import { useAppSelector } from "../../hooks/redux";

const UserPage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );

  return (
    <>
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
