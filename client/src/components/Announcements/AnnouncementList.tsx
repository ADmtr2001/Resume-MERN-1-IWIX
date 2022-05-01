import React, { FC, PropsWithChildren, useState } from "react";
import BoxAnnouncement from "./BoxAnnouncement/BoxAnnouncement";

import { Wrapper } from "./AnnouncementList.styles";
import LineAnnouncement from "./LineAnnouncement/LineAnnouncement";
import { IAnnouncement } from "../../types";

interface AnnouncementListProps {
  title: string;
  announcements: IAnnouncement[];
}

const AnnouncementList: FC<PropsWithChildren<AnnouncementListProps>> = ({
  title,
  announcements,
}) => {
  const isGridView = true;

  let listAnnouncements: JSX.Element[];
  if (isGridView) {
    listAnnouncements = announcements.map((announcement) => (
      <BoxAnnouncement key={announcement._id} />
    ));
  } else {
    listAnnouncements = announcements.map((announcement) => (
      <LineAnnouncement key={announcement._id} />
    ));
  }

  return (
    <Wrapper>
      <h2 className='announcement-title'>{title}</h2>
      <div className={isGridView ? "announcements-grid" : "announcements-line"}>
        {listAnnouncements}
      </div>
    </Wrapper>
  );
};

export default AnnouncementList;
