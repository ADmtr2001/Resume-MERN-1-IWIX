import styled from "styled-components";

interface WrapperProps {
  fullWidth?: boolean;
}

export const Wrapper = styled.input<WrapperProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  padding: 1rem;
  height: 5rem;
  border: 0.3rem solid ${(props) => props.theme.dark1};
  font-size: 2rem;
  outline: none;
`;
