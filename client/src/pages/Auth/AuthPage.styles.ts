import styled from "styled-components";
import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};
  width: 50rem;
  margin: 2rem auto 0;
  padding: 1rem;
  ${setShadowForSection()};

  form {
    input {
    }

    button {
      display: block;
      margin: 2rem 0 0 auto;
    }
  }

  & > button {
    display: block;
    margin: 2rem auto 0;
    background-color: transparent;
    border: none;
  }
`;
