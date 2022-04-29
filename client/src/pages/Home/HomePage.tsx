import React from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

const HomePage = () => {
  return (
    <>
      <Search />
      <Categories />
      <AnnouncementList />
    </>
  );
};

export default HomePage;
