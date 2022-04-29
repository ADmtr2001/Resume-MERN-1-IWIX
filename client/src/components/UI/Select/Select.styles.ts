import styled from "styled-components";

export const Wrapper = styled.select`
  width: 20rem;
  height: 5rem;
  border: 2px solid ${(props) => props.theme.dark1};
  outline: none;
  font-size: 2rem;
`;
