import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({ justify: "center", align: "center" })};

  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(0.3rem);

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;
