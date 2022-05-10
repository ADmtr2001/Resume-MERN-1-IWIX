import styled from "styled-components";
import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};
  width: 50rem;
  margin: 2rem auto 0;
  padding: 1rem;
  ${setShadowForSection()};

  form {
    .input-error {
      text-align: right;
      color: #ff3333;
      height: 2.5rem;
    }

    button {
      display: block;
      margin: 2rem 0 0 auto;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
