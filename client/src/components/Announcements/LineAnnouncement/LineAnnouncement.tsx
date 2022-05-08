import React, { FC } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IAnnouncement } from "../../../types";
import Button from "../../UI/Button/Button";
import { GrEdit } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setDeleteModal } from "../../../store/reducers/appState/appStateSlice";
import { formatDate } from "../../../utils";
import { Wrapper } from "./LineAnnouncement.styles";

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

  return (
    <Wrapper className={className}>
      <Link to={`/announcement/${announcement._id}`}>
        <div className='announcement-left'>
          <img
            crossOrigin='anonymous'
            src={`http://localhost:5000/${announcement.image}`}
            alt='announcement'
          />
        </div>
        <div className='announcement-right'>
          <div className='title-location'>
            <h3 className='title'>
              {announcement.title.length > 25 ? (
                <>
                  {announcement.title.slice(0, 25)}
                  <span className='overflow-on'>
                    {announcement.title.slice(25)}
                  </span>
                  <span className='overflow-off'>...</span>
                </>
              ) : (
                announcement.title
              )}
            </h3>
            <p className='time'>{formatDate(announcement.createdAt)}</p>
            <p className='location'>{announcement.location}</p>
          </div>
          <p className='price'>{announcement.price} грн</p>
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

export default LineAnnouncement;
