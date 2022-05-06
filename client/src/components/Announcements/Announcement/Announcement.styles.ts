import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.article`
  background: ${(props) => props.theme.dark1};
  padding: 1rem;
  cursor: pointer;
  transition: all ${(props) => props.theme.fastTransition};
  position: relative;

  .action-buttons {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    ${setFlex({ direction: "column" })};

    button {
      width: 4rem;
      height: 4rem;
      box-shadow: none;
    }

    button + button {
      margin-top: 0.5rem;
    }
  }

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
