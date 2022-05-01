import styled from "styled-components";
import { setFlex } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  width: 100%;
  height: 100%;

  ${setFlex({ justify: "center", align: "center" })};
`;
