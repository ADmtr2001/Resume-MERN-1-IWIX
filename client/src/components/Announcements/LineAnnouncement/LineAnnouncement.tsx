import React, { FC } from "react";

import Button from "../../UI/Button/Button";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setDeleteModal } from "../../../store/reducers/appState/appStateSlice";
import { formatDate } from "../../../utils";

import { Wrapper } from "./LineAnnouncement.styles";
import { GrEdit, MdDelete } from "../../../common/icons";

import { IAnnouncement } from "../../../types";

export interface AnnouncementProps {
  announcement: IAnnouncement;
  className?: string;
}

const LineAnnouncement: FC<AnnouncementProps> = ({
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
      <Link to={`/announcement/${announcement._id}`}>
        <div className="left-content">
          <img
            crossOrigin="anonymous"
            src={`${process.env.REACT_APP_IMAGE_URL}${announcement.image}`}
            alt="announcement"
          />
        </div>
        <div className="right-content">
          <div className="title-location">
            <h3 className="announcement-title">
              {announcement.title.length > 25 ? (
                <>
                  {announcement.title.slice(0, 25)}
                  <span className="overflow-on">
                    {announcement.title.slice(25)}
                  </span>
                  <span className="overflow-off">...</span>
                </>
              ) : (
                announcement.title
              )}
            </h3>
            <p className="announcement-time">
              {formatDate(announcement.createdAt)}
            </p>
            <p className="announcement-location">{announcement.location}</p>
          </div>
          <p className="announcement-price">{announcement.price}$</p>
        </div>
      </Link>
      {isActionButtonsVisible && (
        <div className="action-buttons">
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

export default LineAnnouncement;
