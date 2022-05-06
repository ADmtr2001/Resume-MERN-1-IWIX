import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  width: 100%;
  ${setFlex({ justify: "space-around" })};
  flex-wrap: wrap;

  > div {
    background-color: ${(props) => props.theme.light2};
    padding: 1rem;
    ${setShadowForSection()};
    margin-top: 2rem;
    width: 25rem;
  }

  p {
    font-size: 1.8rem;
  }

  .price {
    > div {
      ${setFlex({ justify: "space-between" })};
      input {
        width: 11rem;
      }
    }
  }

  .sort {
  }

  .user {
    position: relative;

    button {
      opacity: 0.5;
      ${setFlex({ justify: "center", align: "center" })};
      width: 3.5rem;
      height: 3.5rem;
      position: absolute;
      top: 0;
      right: 0;
      box-shadow: none;
      font-size: 3rem;
    }
  }
`;
