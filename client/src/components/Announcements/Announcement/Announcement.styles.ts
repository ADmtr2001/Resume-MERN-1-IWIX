import styled from "styled-components";

export const Wrapper = styled.article`
  background: ${(props) => props.theme.dark1};
  padding: 1rem;
  cursor: pointer;
  transition: all ${(props) => props.theme.fastTransition};
  position: relative;

  &.vip::after {
    content: "VIP";
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem 0.75rem;
    background-color: #fcd746;
    font-weight: 700;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
