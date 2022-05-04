import React, { useEffect } from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearAnnouncements } from "../../store/reducers/announcement/announcementSlice";

const CategoryAnnouncementsPage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearAnnouncements());
    };
  }, []);

  return (
    <>
      <Search />
      <Filters />
      <AnnouncementList
        title='Announcements'
        announcements={announcements}
        isLoading={isAnnouncementsLoading}
        isPaginationVisible={true}
      />
    </>
  );
};

export default CategoryAnnouncementsPage;
