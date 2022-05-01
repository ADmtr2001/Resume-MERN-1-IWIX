import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.light2};
  padding: 2rem;

  ${setShadowForSection()};

  .announcement-title {
    font-size: 4rem;
    text-align: center;
  }

  .announcements-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;

    article {
      width: 100%;
      height: 35rem;

      ${setFlex({ direction: "column" })};

      .announcement-top {
        width: 100%;
        height: auto;
        ${setFlex({ justify: "center" })};

        img {
          width: 20rem;
          height: 20rem;
          object-fit: cover;
        }
      }

      .announcement-bot {
        ${setFlex({ direction: "column" })}
        height: 50%;

        .title {
          flex: 1;
          font-weight: 400;
          font-size: 1.6rem;
        }

        .location-time {
          font-size: 1.4rem;
          font-weight: 300;
        }

        .price {
          font-size: 1.9rem;
        }
      }
    }
  }

  .announcements-line {
    ${setFlex({ direction: "column" })}
    padding: 0 5rem;
    gap: 2rem;

    article {
      ${setFlex({})}
      height: 20rem;
      heigth: 20rem;

      .announcement-top {
        width: 20rem;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .announcement-bot {
        margin: 0;
        width: 100%;
        height: 100%;

        ${setFlex({ justify: "space-between" })};

        .title-location {
          ${setFlex({ direction: "column" })};
          padding: 0.5rem 1rem;
          h3 {
            flex: 1;
          }
        }

        .title {
          font-size: 2rem;
        }

        .location-time {
          font-size: 1.7rem;
          font-weight: 300;
        }

        .price {
          font-size: 2.2rem;
        }
      }
    }
  }
`;
