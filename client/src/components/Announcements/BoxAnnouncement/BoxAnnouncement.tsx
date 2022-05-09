import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAnnouncement } from "../../../types";
import Button from "../../UI/Button/Button";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setDeleteModal } from "../../../store/reducers/appState/appStateSlice";
import { formatDate, scrollToTop } from "../../../utils";
import { Wrapper } from "./BoxAnnouncement.styles";

export interface AnnouncementProps {
  announcement: IAnnouncement;
  className?: string;
}

const BoxAnnouncement: FC<AnnouncementProps> = ({
  announcement,
  className,
}) => {
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const confirmDeletion = () => {
    dispatch(setDeleteModal({ visible: true, announcement: announcement._id }));
  };

  const moveToUpdate = () => {
    navigate(`/update/${announcement._id}`);
  };

  return (
    <Wrapper className={className}>
      <Link to={`/announcement/${announcement._id}`} onClick={scrollToTop}>
        <div className='announcement-top'>
          <img
            crossOrigin='anonymous'
            src={`http://localhost:5000/${announcement.image}`}
            alt='announcement'
          />
        </div>
        <div className='announcement-bot'>
          <h3 className='title'>
            {announcement.title.length > 25
              ? announcement.title.slice(0, 25) + "..."
              : announcement.title}
          </h3>
          <div className='info'>
            <p className='time'>{formatDate(announcement.createdAt)}</p>
            <p className='location'>{announcement.location}</p>
            <p className='price'>{announcement.price}$</p>
          </div>
        </div>
      </Link>
      {user?._id === announcement.creator && location.pathname === "/user" && (
        <div className='action-buttons'>
          <Button onClick={moveToUpdate}>
            <GrEdit />
          </Button>
          <Button onClick={confirmDeletion}>
            <MdDelete />
          </Button>
        </div>
      )}
    </Wrapper>
  );
};

export default BoxAnnouncement;
