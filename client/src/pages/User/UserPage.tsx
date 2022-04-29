import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";

const UserPage = () => {
  return (
    <>
      <Filters />
      <AnnouncementList />
    </>
  );
};

export default UserPage;
