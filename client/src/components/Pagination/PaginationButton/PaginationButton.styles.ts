import styled from "styled-components";

export const Wrapper = styled.button`
  margin: 0 0.25rem;
  width: 3rem;
  height: 3rem;

  background-color: ${(props) => props.theme.light3};
  border: 2px solid ${(props) => props.theme.dark1};

  transition: background-color ${(props) => props.theme.fastTransition};

  &.active {
    background-color: ${(props) => props.theme.dark1};
  }

  &:not([disabled]):hover {
    background-color: ${(props) => props.theme.dark1};
  }
`;
