import React, { useEffect } from "react";

import AnnouncementList from "../../components/Announcements/AnnouncementList";
import Categories from "../../components/Categories/Categories";
import Search from "../../components/Search/Search";

import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncGetVipAnnouncements } from "../../store/reducers/announcement/announcementActionCreators";

const HomePage = () => {
  const { vipAnnouncements, isVipAnnouncementsLoading } = useAppSelector(
    (state) => state.announcement
  );

  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useAppDispatch();

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
        title="VIP Announcements"
        announcements={vipAnnouncements}
        isLoading={isVipAnnouncementsLoading}
        limit={4}
        isGridView={true}
      />
    </>
  );
};

export default HomePage;
