import { Link } from "react-router-dom";
import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled(Link)`
  width: 15rem;
  height: 4rem;

  background-color: ${(props) => props.theme.light3};

  border: none;

  font-size: 2rem;

  transition: all ${(props) => props.theme.fastTransition};

  ${setFlex({ justify: "center", align: "center" })};

  box-shadow: 0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => props.theme.dark1};
    box-shadow: none;
  }
`;
