import styled from "styled-components";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.dark3};

  width: 4rem;
  height: 4rem;

  position: fixed;
  bottom: 3rem;
  right: 3rem;

  font-size: 3rem;

  ${setFlex({ justify: "center", align: "center" })};

  border: 0.2rem solid ${(props) => props.theme.dark3};
  border-radius: 50%;

  transition: all linear 0.2s;

  @media (min-width: 900px) {
    :hover {
      color: ${(props) => props.theme.light2};
      background-color: ${(props) => props.theme.dark3};
    }
  }
`;
