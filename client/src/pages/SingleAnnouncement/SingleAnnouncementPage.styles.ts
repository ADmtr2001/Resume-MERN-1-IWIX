import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.main`
  .top-content {
    ${setFlex({ justify: "space-between" })}

    width: 100%;
    margin-top: 2rem;

    .top-left-content {
      background-color: ${(props) => props.theme.light2};

      width: 50%;
      min-height: 10rem;
      max-height: 55rem;

      ${setShadowForSection()};

      .left-announcement-image {
        ${setFlex({ justify: "center", align: "center" })}

        width: 100%;
        height: 100%;
        max-height: 100%;

        padding: 1rem;

        img {
          width: 100%;
          heigth: auto;
          max-height: 100%;
        }
      }
    }

    .top-right-content {
      ${setFlex({ direction: "column" })};
      width: 48%;

      .right-user {
        ${setFlex({ align: "center" })}

        background-color: ${(props) => props.theme.light2};

        height: 10rem;
        margin-bottom: 2rem;
        padding: 1rem;

        ${setShadowForSection()};
      }

      .right-description {
        background-color: ${(props) => props.theme.light2};

        min-height: 20rem;
        height: 100%;

        padding: 1rem;

        ${setShadowForSection()};

        .right-publish-time {
          font-weight: 300;
        }

        .right-title {
          font-size: 3rem;
          word-break: break-all;

          margin: 0;
        }

        .right-price {
          font-size: 2.5rem;
        }
      }
    }
  }

  .announcements-list {
    padding: 0;
  }

  @media (max-width: 700px) {
    .top-content {
      ${setFlex({ direction: "column" })};

      .top-left-content {
        width: 100%;
        max-height: 100%;
      }

      .top-right-content {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
`;
