import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";
import { AnnouncementWrapper } from "../BaseAnnouncement/Announcement.styles";

export const Wrapper = styled(AnnouncementWrapper)`
  > a {
    ${setFlex({})}

    height: 18rem;
    width: 100%;
  }

  .announcement-left {
    width: 20rem;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .announcement-right {
    ${setFlex({ justify: "space-between" })};

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0rem 1rem;

    .title-location {
      ${setFlex({ direction: "column" })};

      padding-right: 3rem;

      h3 {
        flex: 1;
      }
    }

    .title {
      font-size: 2rem;
      word-break: break-all;

      .overflow-on {
        display: inline;
      }

      .overflow-off {
        display: none;
      }
    }

    .location {
      font-size: 1.4rem;
      font-weight: 300;
    }

    .time {
      font-size: 1.4rem;
      font-weight: 300;
    }

    .price {
      min-width: 12rem;

      font-size: 2.2rem;
      text-align: right;
    }
  }

  @media (max-width: 1000px) {
    > a {
      height: 15rem;
    }
  }

  @media (max-width: 700px) {
    .announcement-right {
      ${setFlex({ direction: "column" })};

      .title-location {
        padding-right: 0;

        h3 {
          flex: 0;
        }
      }

      .price {
        margin-top: auto;
      }
    }
  }

  @media (max-width: 600px) {
    .announcement-right {
      .title {
        .overflow-on {
          display: none;
        }

        .overflow-off {
          display: inline;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .announcement-right {
      .title {
        font-size: 1.6rem;
      }

      .price {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 350px) {
    .announcement-right {
      .location {
        display: none;
      }
    }
  }
`;
