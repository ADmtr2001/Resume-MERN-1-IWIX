import React, { FC, PropsWithChildren, useMemo } from "react";

import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import Pagination from "../Pagination/Pagination";
import BoxAnnouncement from "./BoxAnnouncement/BoxAnnouncement";
import LineAnnouncement from "./LineAnnouncement/LineAnnouncement";

import { useNavigate } from "react-router-dom";

import { Wrapper } from "./AnnouncementList.styles";

import { IAnnouncement } from "../../types";

interface AnnouncementListProps {
  title: string;
  announcements: IAnnouncement[];
  isLoading: boolean;
  limit?: number;
  exceptions?: string[];
  isPaginationVisible?: boolean;
  isGridView: boolean;
  ListButton?: JSX.Element;
}

const AnnouncementList: FC<PropsWithChildren<AnnouncementListProps>> = ({
  title,
  announcements,
  isLoading,
  limit,
  exceptions,
  isPaginationVisible = false,
  isGridView,
  ListButton,
}) => {
  const navigate = useNavigate();

  let listContent: JSX.Element[] = useMemo(() => {
    const Announcement = isGridView ? BoxAnnouncement : LineAnnouncement;
    let filteredAnnouncements = announcements;

    if (exceptions) {
      filteredAnnouncements = filteredAnnouncements.filter(
        (announcement) => !exceptions.includes(announcement._id)
      );
    }

    if (limit) {
      filteredAnnouncements = filteredAnnouncements.slice(0, limit);
    }

    const content = filteredAnnouncements.map((announcement, index) => {
      const classes = announcement.isVip
        ? `vip ${limit ? `an${index + 1}` : ""}`
        : `${limit ? `an${index + 1}` : ""}`;
      return (
        <Announcement
          className={classes}
          key={announcement._id}
          announcement={announcement}
        />
      );
    });

    return content;
  }, [announcements, isGridView, limit]);

  if (isLoading) {
    return (
      <Wrapper>
        <h2 className="list-title">{title}</h2>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className="list-title">{title}</h2>
      {listContent.length === 0 ? (
        <div className="empty-message">
          <p>No announcements yet</p>
          <Button onClick={() => navigate("/creation")}>Create</Button>
        </div>
      ) : (
        <div
          className={isGridView ? "announcements-grid" : "announcements-line"}
        >
          {listContent}
        </div>
      )}

      {isPaginationVisible && <Pagination />}
      {ListButton ? <div className="show-all-button">{ListButton}</div> : null}
    </Wrapper>
  );
};

export default AnnouncementList;
