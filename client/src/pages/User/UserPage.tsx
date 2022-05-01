import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";

const UserPage = () => {
  return (
    <>
      <Filters />
      <AnnouncementList title='My Announcements' announcements={[]} />
    </>
  );
};

export default UserPage;
