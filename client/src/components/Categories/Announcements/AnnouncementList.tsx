import React from "react";
import Announcement from "./Announcement/Announcement";

import { Wrapper } from "./AnnouncementList.styles";

const AnnouncementList = () => {
  return (
    <Wrapper>
      <h1 className='title'>Announcements</h1>
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