import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  margin-top: 2rem;

  ${setShadowForSection()};

  .title {
    text-align: center;
    font-size: 4rem;
  }

  .categories {
    ${setFlex({ justify: "center" })};
    flex-wrap: wrap;
  }
`;
