import styled from "styled-components";
import { AnnouncementWrapper } from "../BaseAnnouncement/Announcement.styles";

import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled(AnnouncementWrapper)`
  ${setFlex({ direction: "column" })};

  width: 100%;
  height: 35rem;

  .top-content {
    ${setFlex({ justify: "center" })};

    width: 100%;
    height: auto;

    img {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
    }
  }

  .bot-content {
    ${setFlex({ direction: "column" })};

    height: 13rem;

    .announcement-title {
      font-weight: 400;
      word-break: break-all;
    }

    .announcement-info {
      margin-top: auto;

      .announcement-location {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .announcement-time {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .announcement-price {
        font-size: 1.9rem;
      }
    }
  }
`;
