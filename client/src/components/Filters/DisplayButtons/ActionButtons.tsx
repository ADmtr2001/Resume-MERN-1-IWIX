import React, { FC } from "react";
import Button from "../../UI/Button/Button";
import { IoGridSharp } from "react-icons/io5";
import { AiOutlineBars } from "react-icons/ai";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setIsGridView } from "../../../store/reducers/appState/appStateSlice";
import { GrPowerReset } from "react-icons/gr";
import { Wrapper } from "./ActionButtons.styles";

interface ActionButtonsProps {
  reset: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = ({ reset }) => {
  const dispatch = useAppDispatch();
  const { isGridView } = useAppSelector((state) => state.appState);

  const setGridView = () => {
    dispatch(setIsGridView(true));
  };

  const setLineView = () => {
    dispatch(setIsGridView(false));
  };

  return (
    <Wrapper>
      <div className='display'>
        <p>Display</p>
        <div className='buttons'>
          <Button isActive={isGridView} onClick={setGridView}>
            <IoGridSharp />
          </Button>
          <Button isActive={!isGridView} onClick={setLineView}>
            <AiOutlineBars />
          </Button>
        </div>
      </div>
      <div className='reset'>
        <p>Reset</p>
        <div className='buttons'>
          <Button onClick={reset}>
            <GrPowerReset />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ActionButtons;
