import styled from "styled-components";

export const Wrapper = styled.textarea`
  border: 2px solid ${(props) => props.theme.dark1};
  width: 100%;
  resize: none;
  padding: 1rem;
`;
