import React from "react";
import AnnouncementList from "../../components/Categories/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";

const UserPage = () => {
  return (
    <>
      <Filters />
      <AnnouncementList/>
    </>
  );
};

export default UserPage;
