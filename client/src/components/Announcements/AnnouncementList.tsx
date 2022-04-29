import React from "react";
import Announcement from "./Announcement/Announcement";

import { Wrapper } from "./AnnouncementList.styles";

const AnnouncementList = () => {
  return (
    <Wrapper>
      <h2 className='announcement-title'>Announcements</h2>
      <div className='announcements'>
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
        <Announcement />
      </div>
    </Wrapper>
  );
};

export default AnnouncementList;
