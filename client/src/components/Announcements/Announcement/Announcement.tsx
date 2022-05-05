import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IAnnouncement } from "../../../types";
import { Wrapper } from "./Announcement.styles";

export interface AnnouncementProps {
  announcement: IAnnouncement;
  className?: string;
}

const Announcement: FC<AnnouncementProps> = ({ announcement, className }) => {
  return (
    <Wrapper className={className}>
      <Link to={`/announcement/${announcement._id}`}>
        <div className='announcement-top'>
          <img
            crossOrigin='anonymous'
            src={`http://localhost:5000/${announcement.image}`}
            alt='announcement'
          />
        </div>
        <div className='announcement-bot'>
          <div className='title-location'>
            <h3 className='title'>{announcement.title}</h3>
            <p className='location-time'>
              {announcement.location} - {announcement.createdAt}
            </p>
          </div>
          <p className='price'>{announcement.price} грн</p>
        </div>
      </Link>
    </Wrapper>
  );
};

export default Announcement;
