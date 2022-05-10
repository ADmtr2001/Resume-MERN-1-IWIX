import React, { FC } from "react";

import Button from "../../UI/Button/Button";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setDeleteModal } from "../../../store/reducers/appState/appStateSlice";
import { formatDate, scrollToTop } from "../../../utils";

import { IAnnouncement } from "../../../types";

import { Wrapper } from "./BoxAnnouncement.styles";
import { GrEdit, MdDelete } from "../../../common/icons";

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

  const isActionButtonsVisible =
    user?._id === announcement.creator && location.pathname === "/user";

  return (
    <Wrapper className={className}>
      <Link to={`/announcement/${announcement._id}`} onClick={scrollToTop}>
        <div className="top-content">
          <img
            crossOrigin="anonymous"
            src={`${process.env.REACT_APP_IMAGE_URL}${announcement.image}`}
            alt="announcement"
          />
        </div>
        <div className="bot-content">
          <h3 className="announcement-title">
            {announcement.title.length > 25
              ? announcement.title.slice(0, 25) + "..."
              : announcement.title}
          </h3>
          <div className="announcement-info">
            <p className="announcement-time">
              {formatDate(announcement.createdAt)}
            </p>
            <p className="announcement-location">{announcement.location}</p>
            <p className="announcement-price">{announcement.price}$</p>
          </div>
        </div>
      </Link>
      {isActionButtonsVisible && (
        <div className="announcement-action-buttons">
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
