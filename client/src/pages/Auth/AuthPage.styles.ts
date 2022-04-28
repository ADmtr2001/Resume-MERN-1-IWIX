import styled from "styled-components";

export const Wrapper = styled.section`
  background-color: grey;
  width: 50rem;
  margin: 2rem auto 0;
  padding: 1rem;

  form {
    input {
      height: 5rem;
      margin-top: 2rem;
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
    color: white;
  }
`;
