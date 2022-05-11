import styled from "styled-components";
import { AnnouncementWrapper } from "../BaseAnnouncement/Announcement.styles";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled(AnnouncementWrapper)`
  > a {
    ${setFlex({})}

    height: 18rem;
    width: 100%;
  }

  .left-content {
    width: 20rem;

    img {
      width: 100%;
      height: 100%;

      background-color: ${(props) => props.theme.dark2};
    }
  }

  .right-content {
    ${setFlex({ justify: "space-between" })};

    width: 100%;
    height: 100%;

    margin: 0;
    padding: 0rem 1rem;

    .title-location {
      ${setFlex({ direction: "column" })};

      padding-right: 3rem;

      .announcement-title {
        font-size: 2rem;
        word-break: break-all;
        flex: 1;

        .overflow-on {
          display: inline;
        }

        .overflow-off {
          display: none;
        }
      }

      .announcement-time {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .announcement-location {
        font-size: 1.4rem;
        font-weight: 300;
      }
    }

    .announcement-price {
      min-width: 12rem;
      margin-top: auto;

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
    .right-content {
      ${setFlex({ direction: "column" })};

      .title-location {
        padding-right: 0;

        .announcement-title {
          flex: 0;
        }
      }

      .announcement-price {
        margin-top: auto;
      }
    }
  }

  @media (max-width: 600px) {
    .right-content {
      .announcement-title {
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
    .right-content {
      .title {
        font-size: 1.6rem;
      }

      .announcement-price {
        font-size: 1.5rem;
        font-weight: 700;
      }
    }
  }

  @media (max-width: 350px) {
    .right-content {
      .announcement-location {
        display: none;
      }
    }
  }
`;
