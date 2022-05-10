import styled from "styled-components";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const AnnouncementWrapper = styled.article`
  background: ${(props) => props.theme.dark1};

  padding: 1rem;
  position: relative;

  cursor: pointer;

  transition: all ${(props) => props.theme.fastTransition};

  .announcement-action-buttons {
    ${setFlex({ direction: "column" })};

    margin: 0;
    position: absolute;
    top: 0;
    right: 0;

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

    padding: 0.5rem 0.75rem;
    position: absolute;
    top: 0;
    left: 0;

    background-color: #fcd746;
    font-weight: 700;
  }

  @media (min-width: 900px) {
    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 900px) {
    .action-buttons {
      left: 0;
    }
  }
`;
