import React from "react";

import { Wrapper } from "./Announcement.styles";

const Announcement = () => {
  return (
    <Wrapper>
      <div className='announcement-top'>
        <img
          src='https://ireland.apollo.olxcdn.com/v1/files/2a1iz1edcud02-UA/image;s=1000x700'
          alt='announcement'
        />
      </div>
      <div className='announcement-bot'>
        <h3 className='title'>Announcement Title</h3>
        <p className='location-time'>location-time</p>
        <p className='price'>650 грн</p>
      </div>
    </Wrapper>
  );
};

export default Announcement;
