import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import {
  asyncFetchAnnouncements,
  asyncGetVipAnnouncements,
} from "../../store/reducers/announcement/announcementActionCreators";
import { clearAnnouncements } from "../../store/reducers/announcement/announcementSlice";

const HomePage = () => {
  const location = useLocation();
  const dispatch = useAppDispatch();
  const { vipAnnouncements, isVipAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );

  useEffect(() => {
    dispatch(asyncGetVipAnnouncements());
  }, []);

  return (
    <>
      <Search />
      <Categories />
      <AnnouncementList
        title='VIP Announcements'
        announcements={vipAnnouncements}
        isLoading={isVipAnnouncementsLoading}
        limit={4}
      />
    </>
  );
};

export default HomePage;
