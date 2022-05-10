import styled from "styled-components";

import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  width: 50rem;
  margin: 2rem auto 0;
  padding: 1rem;

  ${setShadowForSection()};

  h2 {
    font-size: 3rem;
    text-align: center;

    margin: 0;
  }

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

  .request-error {
    text-align: center;
    color: #ff3333;
    font-size: 2rem;
  }

  & > button {
    display: block;
    margin: 2rem auto 0;

    background-color: transparent;

    border: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
