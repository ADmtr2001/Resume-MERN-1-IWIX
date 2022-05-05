import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearAnnouncements } from "../../store/reducers/announcement/announcementSlice";

const UserPage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );
  const { isGridView } = useAppSelector((state) => state.appState);
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
        title='My Announcements'
        announcements={announcements}
        isLoading={isAnnouncementsLoading}
        isPaginationVisible={true}
        isGridView={isGridView}
      />
    </>
  );
};

export default UserPage;
