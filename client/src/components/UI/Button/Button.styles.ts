import styled from "styled-components";

interface WrapperProps {
  isActive?: boolean;
}

export const Wrapper = styled.button<WrapperProps>`
  width: 15rem;
  height: 4rem;

  background-color: ${(props) =>
    props.isActive ? props.theme.dark1 : props.theme.light3};

  border: none;

  font-size: 2rem;

  transition: all 0.35s;

  box-shadow: ${(props) =>
    props.isActive ? "none" : "0.1rem 0.1rem 0.2rem 0.2rem rgba(0, 0, 0, 0.2)"};

  &:hover {
    background-color: ${(props) => props.theme.dark1};
    box-shadow: none;
  }
`;
