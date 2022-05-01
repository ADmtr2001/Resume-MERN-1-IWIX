import React, { useEffect } from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { fetchAsyncAnnouncements } from "../../store/reducers/announcement/announcementActionCreators";

const HomePage = () => {
  const { announcements } = useAppSelector((state) => state.announcement);
  const dispatch = useAppDispatch();
  console.log(announcements);

  useEffect(() => {
    dispatch(fetchAsyncAnnouncements());
  }, [dispatch]);

  return (
    <>
      <Search />
      <Categories />
      <AnnouncementList title='Announcements' announcements={announcements} />
    </>
  );
};

export default HomePage;
