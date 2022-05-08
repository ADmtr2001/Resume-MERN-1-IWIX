import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  margin: 2rem auto 0;

  width: 60%;
  height: 8rem;

  ${setShadowForSection()};

  form {
    ${setFlex({})};

    width: 100%;
    height: 100%;

    input {
      height: 100%;

      border-right: none;
    }

    button {
      ${setFlex({ justify: "center", align: "center" })};

      width: 15rem;

      font-size: 2.1rem;

      background-color: transparent;

      border: 2px solid ${(props) => props.theme.dark1};

      transition: background-color ${(props) => props.theme.fastTransition};

      span {
        margin-right: 0.5rem;
      }
    }
  }

  @media (min-width: 900px) {
    form {
      button:hover {
        background-color: ${(props) => props.theme.dark1};
      }
    }
  }

  @media (max-width: 900px) {
    width: 90%;
  }

  @media (max-width: 500px) {
    form {
      button {
        width: 7rem;

        span {
          display: none;
        }
      }
    }
  }
`;
