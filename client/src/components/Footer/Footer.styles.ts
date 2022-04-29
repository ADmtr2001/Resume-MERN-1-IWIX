import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.light2};
  height: 15rem;
  margin-top: 2rem;
  ${setShadowForSection()};

  width: 100%;
  ${setFlex({ direction: "column", align: "center" })}

  a {
    transition: color ${(props) => props.theme.fastTransition};
  }

  .content {
    padding-top: 1rem;
    ${setFlex({ justify: "space-around" })}
    width: 100%;

    a {
      color: ${(props) => props.theme.dark2};
      display: block;

      margin-bottom: 0.3rem;
    }

    a:hover {
      color: #000;
    }
  }

  .my-socials {
    font-size: 4rem;

    a:hover {
      color: green;
    }
  }
`;
