import React, { FC, PropsWithChildren } from "react";

import { Wrapper } from "./PaginationButton.styles";

interface PaginationButtonProps {
  className: string;
  onClick: () => void;
}

const PaginationButton: FC<PropsWithChildren<PaginationButtonProps>> = (
  props
) => {
  return <Wrapper {...props} />;
};

export default PaginationButton;
