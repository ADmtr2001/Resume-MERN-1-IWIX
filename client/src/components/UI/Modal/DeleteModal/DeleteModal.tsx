import React from "react";

import Button from "../../Button/Button";
import Modal from "../Modal";

import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import { asyncDeleteAnnouncement } from "../../../../store/reducers/announcement/announcementActionCreators";
import { setDeleteModal } from "../../../../store/reducers/appState/appStateSlice";

import { Wrapper } from "./DeleteModal.styles";

const DeleteModal = () => {
  const { isDeleteModalVisible, announcementToDelete } = useAppSelector(
    (state) => state.appState
  );

  const dispatch = useAppDispatch();

  const deleteAnnouncement = () => {
    if (announcementToDelete) {
      dispatch(asyncDeleteAnnouncement(announcementToDelete));
      dispatch(setDeleteModal({ visible: false, announcement: null }));
    }
  };

  const closeModal = () => {
    dispatch(setDeleteModal({ visible: false, announcement: null }));
  };

  return isDeleteModalVisible ? (
    <Modal>
      <Wrapper>
        <h4>Delete this announcement?</h4>
        <div className="modal-buttons">
          <Button onClick={deleteAnnouncement}>Yes</Button>
          <Button onClick={closeModal}>No</Button>
        </div>
      </Wrapper>
    </Modal>
  ) : null;
};

export default DeleteModal;
