import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.main`
  .top-info {
    margin-top: 2rem;
    width: 100%;
    ${setFlex({ justify: "space-between" })}

    .left {
      background-color: ${(props) => props.theme.light2};
      width: 50%;
      min-height: 10rem;
      max-height: 55rem;
      ${setShadowForSection()};

      .announcement-image {
        width: 100%;
        height: 100%;
        max-height: 100%;
        padding: 1rem;
        ${setFlex({ justify: "center", align: "center" })}

        img {
          width: 100%;
          heigth: auto;
          max-height: 100%;
        }
      }
    }

    .right {
      width: 48%;
      ${setFlex({ direction: "column" })};

      .user {
        background-color: ${(props) => props.theme.light2};
        height: 10rem;
        margin-bottom: 2rem;
        ${setShadowForSection()};
        ${setFlex({ align: "center" })}
        padding: 1rem;
      }

      .description {
        background-color: ${(props) => props.theme.light2};
        min-height: 20rem;
        height: 100%;
        ${setShadowForSection()};
        padding: 1rem;

        .publish-time {
          font-weight: 300;
        }

        .title {
          font-size: 3rem;
          margin: 0;
          word-break: break-all;
        }

        .price {
          font-size: 2.5rem;
        }
      }
    }
  }

  .announcements {
    padding: 0;
  }

  @media (max-width: 700px) {
    .top-info {
      ${setFlex({ direction: "column" })};

      .left {
        width: 100%;
        max-height: 100%;
      }

      .right {
        width: 100%;
        margin-top: 2rem;
      }
    }
  }
`;
