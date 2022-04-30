import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.button`
  position: fixed;
  bottom: 3rem;
  right: 3rem;

  background-color: transparent;
  color: ${(props) => props.theme.dark3};

  font-size: 3rem;

  ${setFlex({ justify: "center", align: "center" })}

  width: 4rem;
  height: 4rem;

  border: 0.2rem solid ${(props) => props.theme.dark3};
  border-radius: 50%;

  transition: all linear 0.2s;

  :hover {
    background-color: ${(props) => props.theme.dark3};
    color: ${(props) => props.theme.light2};
  }
`;
