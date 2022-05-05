import React, { useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
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
  const searchParams = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(asyncGetVipAnnouncements());
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && location.search !== "") {
      navigate(`/announcements${location.search}`);
    }
  }, [searchParams]);

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
