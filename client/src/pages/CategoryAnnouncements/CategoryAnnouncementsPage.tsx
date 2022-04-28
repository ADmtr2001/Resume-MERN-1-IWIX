import React from "react";
import AnnouncementList from "../../components/Categories/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";

const CategoryAnnouncementsPage = () => {
  return (
    <>
      <Search />
      <Filters />
      <AnnouncementList />
    </>
  );
};

export default CategoryAnnouncementsPage;
