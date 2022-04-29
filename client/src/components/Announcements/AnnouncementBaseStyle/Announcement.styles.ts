import styled from "styled-components";

export const Announcement = styled.article`
  background: ${(props) => props.theme.dark1};
  padding: 1rem;
  cursor: pointer;
  transition: all ${(props) => props.theme.fastTransition};

  &:hover {
    transform: scale(1.1);
  }
`;
