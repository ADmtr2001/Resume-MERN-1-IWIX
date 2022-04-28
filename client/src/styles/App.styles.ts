import styled from "styled-components";
import { setFlex } from "./mixins/mixins.styles";

export const Wrapper = styled.div`
  max-width: 1420px;
  min-height: 100vh;
  padding: 0 10px;
  margin: 0 auto;

  ${setFlex({ direction: "column" })};

  .content {
    flex: 1;
  }
`;
