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
      min-height: 40rem;
      ${setShadowForSection()};
      ${setFlex({ justify: "center", align: "center" })};

      .announcement-image {
        width: 100%;
        heigth: 100%;
        padding: 1rem;

        img {
          width: 100%;
          heigth: auto;
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

        .user-image {
          width: 8rem;
          height: 8rem;
          border-radius: 50%;
          margin-right: 1rem;

          img {
            height: 100%;
            width: 100%;
            border-radius: 50%;
            position: relative;
            top: 0.5rem;
            border: 0.2rem solid ${(props) => props.theme.dark1};
          }
        }

        .info {
          .name {
            text-transform: capitalize;
          }

          .register-date {
            font-weight: 300;
          }

          .rating {
            ${setFlex({ align: "center" })}
            gap: 0.2rem;

            .star {
              color: ${(props) => props.theme.dark1};
              position: relative;
              top: 0.1rem;
            }
          }
        }
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
        }

        .price {
          font-size: 2.5rem;
        }
      }
    }
  }

  .comments {
    margin-top: 2rem;
    background-color: ${(props) => props.theme.light2};
    ${setShadowForSection()};
    padding: 1rem;
  }

  .announcements {
    div {
    }
  }
`;
