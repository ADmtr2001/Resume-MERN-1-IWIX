import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.light2};

  ${setFlex({ direction: "column", align: "center" })}

  width: 100%;
  margin-top: 2rem;

  ${setShadowForSection()};

  .footer-content {
    padding: 2rem;
    ${setFlex({ justify: "space-around" })};
    flex-wrap: wrap;
    width: fit-content;

    div {
      margin: 1rem 2rem;
      width: 20rem;

      a {
        color: ${(props) => props.theme.dark2};

        display: block;
        margin-bottom: 0.3rem;

        transition: color ${(props) => props.theme.fastTransition};
      }
    }
  }

  @media (min-width: 900px) {
    .footer-content {
      div {
        a:hover {
          color: #000;
        }
      }
    }
  }

  @media (max-width: 700px) {
    .footer-content {
      line-height: 2;
      text-align: center;
    }
  }

  @media (max-width: 560px) {
    .footer-content {
      font-size: 2rem;

      div {
        width: 100%;
      }
    }
  }
`;
