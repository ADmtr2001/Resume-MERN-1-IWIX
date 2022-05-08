import React, { useEffect } from "react";
import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Filters from "../../components/Filters/Filters";
import Search from "../../components/Search/Search";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { clearAnnouncements } from "../../store/reducers/announcement/announcementSlice";
import { scrollToTop } from "../../utils";

const AnnouncementsPage = () => {
  const { announcements, isAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );
  const { isGridView } = useAppSelector((state) => state.appState);
  const dispatch = useAppDispatch();

  useEffect(() => {
    scrollToTop();

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
        isGridView={isGridView}
      />
    </>
  );
};

export default AnnouncementsPage;
