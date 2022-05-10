import styled from "styled-components";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  ${setFlex({ justify: "space-between" })};

  button {
    width: 5rem;
    heigth: 5rem;

    svg {
      position: relative;
      top: 0.3rem;
    }
  }

  .display-section {
    button + button {
      margin-left: 1rem;
    }
  }
`;
