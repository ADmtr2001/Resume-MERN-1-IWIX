import styled from "styled-components";
import { setFlex } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background: grey;
  margin-top: 2rem;
  padding: 2rem;

  .title {
    text-align: center;
    font-size: 4rem;
  }

  .categories {
    ${setFlex({ justify: "center" })};
    flex-wrap: wrap;
  }
`;
