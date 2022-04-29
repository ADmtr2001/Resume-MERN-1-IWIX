import React from "react";

import { Wrapper } from "./LineAnnouncement.styles";

const LineAnnouncement = () => {
  return (
    <Wrapper>
      <div className='announcement-left'>
        <img
          src='https://ireland.apollo.olxcdn.com/v1/files/2a1iz1edcud02-UA/image;s=1000x700'
          alt='announcement'
        />
      </div>
      <div className='announcement-right'>
        <div className='left'>
          <h3 className='title'>Announcement Title</h3>
          <p className='location-time'>location-time</p>
        </div>
        <div className='right'>
          <p className='price'>650 грн</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default LineAnnouncement;
