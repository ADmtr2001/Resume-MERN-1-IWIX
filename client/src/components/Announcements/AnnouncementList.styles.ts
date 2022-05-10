import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  margin-top: 2rem;
  padding: 2rem;

  ${setShadowForSection()};

  .list-title {
    font-size: 4rem;
    text-align: center;
  }

  .announcements-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .announcements-line {
    ${setFlex({ direction: "column" })};
    gap: 2rem;

    padding: 0 5rem;
  }

  .empty-message {
    text-align: center;

    button {
      margin-top: 2rem;
    }
  }

  .show-all-button {
    button {
      display: block;

      margin: 2rem auto 0;
    }
  }

  @media (max-width: 900px) {
    .an4 {
      display: none !important;
    }

    .announcements-grid {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .announcements-line {
      padding: 0;
    }
  }

  @media (max-width: 700px) {
    .an4 {
      display: flex !important;
    }

    .announcements-grid {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 500px) {
    .list-title {
      font-size: 3rem;
    }

    .announcements-grid {
      grid-template-columns: 1fr;
    }
  }
`;
