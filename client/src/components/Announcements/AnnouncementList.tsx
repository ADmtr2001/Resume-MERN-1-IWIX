import React, { FC, PropsWithChildren, useState } from "react";

import { Wrapper } from "./AnnouncementList.styles";
import { IAnnouncement } from "../../types";
import Announcement from "./Announcement/Announcement";
import Loader from "../UI/Loader/Loader";

interface AnnouncementListProps {
  title: string;
  announcements: IAnnouncement[];
  isLoading: boolean;
}

const AnnouncementList: FC<PropsWithChildren<AnnouncementListProps>> = ({
  title,
  announcements,
  isLoading,
}) => {
  const isGridView = true;

  if (isLoading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h2 className='announcement-title'>{title}</h2>
      <div className={isGridView ? "announcements-grid" : "announcements-line"}>
        {announcements.map((announcement) => (
          <Announcement key={announcement._id} announcement={announcement} />
        ))}
      </div>
    </Wrapper>
  );
};

export default AnnouncementList;
