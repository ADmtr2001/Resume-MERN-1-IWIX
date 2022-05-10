import styled from "styled-components";

interface WrapperProps {
  isActive?: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  background-color: ${(props) =>
    props.isActive ? props.theme.dark1 : props.theme.light3};

  width: 15rem;
  height: 4rem;

  font-size: 2rem;

  border: none;

  box-shadow: ${(props) =>
    props.isActive ? "none" : "0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2)"};

  transition: all ${(props) => props.theme.fastTransition};

  @media (min-width: 900px) {
    &:hover {
      background-color: ${(props) => props.theme.dark1};

      box-shadow: none;
    }
  }
`;
