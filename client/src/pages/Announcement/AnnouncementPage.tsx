import React from "react";
import Search from "../../components/Search/Search";

import { Wrapper } from "./AnnouncementPage.styles";

const AnnouncementPage = () => {
  return (
    <Wrapper>
      <Search />
      <div className='top-info'>
        <div className='image'>Image</div>
        <div className='user'>User</div>
      </div>
      <div className='bot-info'>
        <div className='description'>Description</div>
        <div className='comments'>Commnets</div>
      </div>
      <div className='announcements'>
        <div>Other user posts</div>
        <div>Other posts</div>
      </div>
    </Wrapper>
  );
};

export default AnnouncementPage;
