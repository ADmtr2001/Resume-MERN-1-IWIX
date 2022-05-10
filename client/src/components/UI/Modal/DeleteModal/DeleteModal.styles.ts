import styled from "styled-components";

import { setFlex } from "../../../../styles/mixins/mixins.styles";

export const Wrapper = styled.div`
  background-color: ${(props) => props.theme.light2};

  ${setFlex({ justify: "center", align: "center", direction: "column" })};

  padding: 2rem;
  margin: 0 1rem;

  text-align: center;

  h4 {
    font-size: 2rem;
  }

  .modal-buttons {
    ${setFlex({ justify: "space-around" })};

    width: 100%;

    margin-top: 1rem;

    button {
      ${setFlex({ justify: "center", align: "center" })};

      width: 10rem;
      height: 5rem;

      font-size: 3rem;
    }
  }
`;
