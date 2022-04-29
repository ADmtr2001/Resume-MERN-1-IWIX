import React, { useState } from "react";
import BoxAnnouncement from "./BoxAnnouncement/BoxAnnouncement";

import { Wrapper } from "./AnnouncementList.styles";
import LineAnnouncement from "./LineAnnouncement/LineAnnouncement";

const AnnouncementList = () => {
  const isGridView = false;

  return (
    <Wrapper>
      <h2 className='announcement-title'>Announcements</h2>
      <div className={isGridView ? "announcements-grid" : "announcements-line"}>
        {/* <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement />
        <BoxAnnouncement /> */}
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
        <LineAnnouncement />
      </div>
    </Wrapper>
  );
};

export default AnnouncementList;
