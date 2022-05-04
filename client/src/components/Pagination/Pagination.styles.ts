import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;
  text-align: center;
  white-space: nowrap;

  button {
    margin: 0 0.25rem;
    width: 3.5rem;
    height: 3.5rem;

    background-color: ${(props) => props.theme.light3};
    border: 2px solid ${(props) => props.theme.dark1};

    transition: background-color ${(props) => props.theme.fastTransition};

    &.active {
      background-color: ${(props) => props.theme.dark1};
    }

    &:hover {
      background-color: ${(props) => props.theme.dark1};
    }
  }
`;
