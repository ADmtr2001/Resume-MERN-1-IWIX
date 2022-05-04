import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  margin: 2rem auto 0;

  ${setShadowForSection()};

  width: 60%;
  height: 8rem;

  form {
    width: 100%;
    height: 100%;

    ${setFlex({})}

    input {
      height: 100%;

      border-right: none;
    }

    button {
      width: 15rem;

      font-size: 2.1rem;

      background-color: transparent;
      border: 2px solid ${(props) => props.theme.dark1};

      ${setFlex({ justify: "center", align: "center" })}

      transition: background-color ${(props) => props.theme.fastTransition};

      span {
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: ${(props) => props.theme.dark1};
      }
    }
  }
`;
