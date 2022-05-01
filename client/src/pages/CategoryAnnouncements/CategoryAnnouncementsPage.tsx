import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";

const CategoryAnnouncementsPage = () => {
  return (
    <>
      <Search />
      <Filters />
      <AnnouncementList title='Announcements' announcements={[]} />
    </>
  );
};

export default CategoryAnnouncementsPage;
