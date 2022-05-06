import React, { FC } from "react";
import { Link } from "react-router-dom";
import { IAnnouncement } from "../../../types";
import Button from "../../UI/Button/Button";
import { Wrapper } from "./Announcement.styles";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../../hooks/redux";
import { setDeleteModal } from "../../../store/reducers/appState/appStateSlice";

export interface AnnouncementProps {
  announcement: IAnnouncement;
  className?: string;
}

const Announcement: FC<AnnouncementProps> = ({ announcement, className }) => {
  const dispatch = useAppDispatch();

  const confirmDeletion = () => {
    dispatch(setDeleteModal({ visible: true, announcement: announcement._id }));
  };

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
      <div className='action-buttons'>
        <Button>
          <GrEdit />
        </Button>
        <Button onClick={confirmDeletion}>
          <MdDelete />
        </Button>
      </div>
    </Wrapper>
  );
};

export default Announcement;
