import { css } from "styled-components";

import { setFlexProps } from "./types";

export const setFlex = ({
  justify = "flex-start",
  align = "normal",
  direction = "row",
}: setFlexProps) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;

export const setShadowForSection = () => css`
  box-shadow: 0.3rem 0.3rem 1rem 0.1rem rgba(0, 0, 0, 0.2);
`;
