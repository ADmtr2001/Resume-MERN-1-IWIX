import React, { FC } from "react";

import Button from "../../UI/Button/Button";

import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setIsGridView } from "../../../store/reducers/appState/appStateSlice";

import { Wrapper } from "./ActionButtons.styles";
import {
  GrPowerReset,
  IoGridSharp,
  AiOutlineBars,
} from "../../../common/icons";

interface ActionButtonsProps {
  reset: () => void;
}

const ActionButtons: FC<ActionButtonsProps> = ({ reset }) => {
  const { isGridView } = useAppSelector((state) => state.appState);

  const dispatch = useAppDispatch();

  const setGridView = () => {
    dispatch(setIsGridView(true));
  };

  const setLineView = () => {
    dispatch(setIsGridView(false));
  };

  return (
    <Wrapper>
      <div className="display-section">
        <p>Display</p>
        <div className="buttons">
          <Button isActive={isGridView} onClick={setGridView}>
            <IoGridSharp />
          </Button>
          <Button isActive={!isGridView} onClick={setLineView}>
            <AiOutlineBars />
          </Button>
        </div>
      </div>
      <div className="reset-section">
        <p>Reset</p>
        <div className="buttons">
          <Button onClick={reset}>
            <GrPowerReset />
          </Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default ActionButtons;
