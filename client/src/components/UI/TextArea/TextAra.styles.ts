import styled from "styled-components";

export const Wrapper = styled.textarea`
  width: 100%;
  padding: 1rem;

  border: 2px solid ${(props) => props.theme.dark1};

  resize: none;
`;
