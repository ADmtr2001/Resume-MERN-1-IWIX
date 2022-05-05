import React from "react";
import Button from "../../UI/Button/Button";
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setIsGridView } from "../../../store/reducers/appState/appStateSlice";

const DisplayButtons = () => {
  const dispatch = useAppDispatch();
  const { isGridView } = useAppSelector((state) => state.appState);

  const setGridView = () => {
    dispatch(setIsGridView(true));
  };

  const setLineView = () => {
    dispatch(setIsGridView(false));
  };

  return (
    <>
      <div className='buttons'>
        <Button isActive={isGridView} onClick={setGridView}>
          <IoGridSharp />
        </Button>
        <Button isActive={!isGridView} onClick={setLineView}>
          <AiOutlineBars />
        </Button>
      </div>
    </>
  );
};

export default DisplayButtons;
