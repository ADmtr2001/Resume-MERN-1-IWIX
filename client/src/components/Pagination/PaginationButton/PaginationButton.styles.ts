import styled from "styled-components";

export const Wrapper = styled.button`
  background-color: ${(props) => props.theme.light3};

  width: 3rem;
  height: 3rem;

  margin: 0 0.25rem;

  border: 2px solid ${(props) => props.theme.dark1};

  transition: background-color ${(props) => props.theme.fastTransition};

  &.active {
    background-color: ${(props) => props.theme.dark1};
  }

  @media (min-width: 900px) {
    &:not([disabled]):hover {
      background-color: ${(props) => props.theme.dark1};
    }
  }
`;
