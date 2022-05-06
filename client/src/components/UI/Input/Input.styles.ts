import styled from "styled-components";

interface WrapperProps {
  fullWidth?: boolean;
}

export const Wrapper = styled.input<WrapperProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
  padding: ${(props) => (props.type === "file" ? "1rem 0" : "1rem")};
  height: 5rem;
  border: ${(props) =>
    props.type === "file" ? "none" : `0.2rem solid ${props.theme.dark1}}`};
  font-size: 2rem;
  outline: none;
`;
