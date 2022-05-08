import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  ${setFlex({ justify: "space-around" })};
  flex-wrap: wrap;

  width: 100%;

  > div {
    background-color: ${(props) => props.theme.light2};

    margin-top: 2rem;
    padding: 1rem;

    width: 25rem;

    ${setShadowForSection()};
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

  .user {
    position: relative;

    button {
      ${setFlex({ justify: "center", align: "center" })};

      width: 3.5rem;
      height: 3.5rem;

      font-size: 3rem;

      position: absolute;
      top: 0;
      right: 0;

      opacity: 0.5;
      box-shadow: none;
    }
  }

  @media (max-width: 560px) {
    > div {
      width: 35rem;
    }

    .price {
      > div {
        ${setFlex({ justify: "space-between" })};

        input {
          width: 45%;
        }
      }
    }
  }
`;
