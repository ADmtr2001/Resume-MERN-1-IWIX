import styled from "styled-components";

interface WrapperProps {
  fullWidth?: boolean;
}

export const Wrapper = styled.input<WrapperProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "50%")};
`;
