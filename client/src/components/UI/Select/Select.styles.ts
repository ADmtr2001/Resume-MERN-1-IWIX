import styled from "styled-components";

interface WrapperProps {
  fullWidth?: boolean;
}

export const Wrapper = styled.select<WrapperProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "20rem")};
  height: 5rem;
  border: 2px solid ${(props) => props.theme.dark1};
  outline: none;
  font-size: 2rem;
`;
