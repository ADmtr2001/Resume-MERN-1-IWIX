import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: yellow;
  width: 10rem;
  height: 10rem;

  margin: 0 2rem 2rem;

  border: 0.2rem solid ${(props) => props.theme.dark1};

  border-radius: 50%;

  transition: transform ${(props) => props.theme.fastTransition};

  img {
    border-radius: 50%;
  }

  &:hover {
    transform: scale(1.2);
  }
`;
