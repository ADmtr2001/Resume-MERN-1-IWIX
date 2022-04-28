import {css} from 'styled-components';

import {setFlexProps} from "./types";

export const correctPosition = css`
  margin-left: 10rem;
  width: calc(100% - 10rem);
`;

export const setFlex = ({justify = 'flex-start', align = 'normal', direction = 'row'}: setFlexProps ) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
  flex-direction: ${direction};
`;