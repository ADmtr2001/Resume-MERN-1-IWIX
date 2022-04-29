import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.article`
  background-color: yellow;
  width: 10rem;
  height: 10rem;

  margin: 0 2rem 5rem;

  border: 0.2rem solid ${(props) => props.theme.dark1};

  border-radius: 50%;

  transition: transform ${(props) => props.theme.fastTransition};

  text-align: center;

  img {
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
