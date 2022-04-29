import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  /* background-color: ${(props) => props.theme.light2}; */
  margin-top: 2rem;

  width: 100%;
  ${setFlex({ justify: "space-around" })}

  > div {
    background-color: ${(props) => props.theme.light2};
    padding: 1rem;
    ${setShadowForSection()};
  }

  p {
    font-size: 1.8rem;
  }

  .price {
    input {
      width: 10rem;
    }

    input + input {
      margin-left: 2rem;
    }
  }

  .sort {
  }

  .buttons {
    ${setFlex({ justify: "center", align: "center" })}

    button {
      width: 5rem;
      heigth: 5rem;

      svg {
        position: relative;
        top: 0.3rem;
      }
    }

    button + button {
      margin-left: 1rem;
    }
  }
`;
