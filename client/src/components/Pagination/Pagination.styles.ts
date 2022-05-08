import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;

  margin-top: 2rem;

  text-align: center;
  white-space: nowrap;

  button {
    background-color: ${(props) => props.theme.light3};

    margin: 0 0.25rem;

    width: 3.5rem;
    height: 3.5rem;

    border: 2px solid ${(props) => props.theme.dark1};

    transition: background-color ${(props) => props.theme.fastTransition};

    &.active {
      background-color: ${(props) => props.theme.dark1};
    }
  }

  @media (min-width: 900px) {
    button:hover {
      background-color: ${(props) => props.theme.dark1};
    }
  }
`;
