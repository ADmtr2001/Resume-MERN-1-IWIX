import React, { FC, PropsWithChildren } from "react";
import { Wrapper } from "./Modal.styles";

const Modal: FC<PropsWithChildren<any>> = ({ children }) => {
  return (
    <Wrapper>
      <div className='modal-content'>{children}</div>
    </Wrapper>
  );
};

export default Modal;
