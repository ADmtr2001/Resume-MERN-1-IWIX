import styled from "styled-components";
import { Link } from "react-router-dom";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled(Link)`
  ${setFlex({ justify: "center", align: "center" })};

  width: 15rem;
  height: 4rem;

  background-color: ${(props) => props.theme.light3};

  border: none;

  font-size: 2rem;

  transition: all ${(props) => props.theme.fastTransition};

  box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);

  @media (min-width: 900px) {
    &:hover {
      background-color: ${(props) => props.theme.dark1};
      box-shadow: none;
    }
  }
`;
