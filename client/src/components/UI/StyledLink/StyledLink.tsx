import React, { FC, PropsWithChildren } from "react";

import { Wrapper } from "./StyledLink.styles";

interface StyledLinkProps {
  to: string;
}

const StyledLink: FC<PropsWithChildren<StyledLinkProps>> = ({
  children,
  to,
}) => {
  return <Wrapper to={to}>{children}</Wrapper>;
};

export default StyledLink;
