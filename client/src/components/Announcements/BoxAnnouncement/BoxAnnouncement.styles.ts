import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";
import { AnnouncementWrapper } from "../BaseAnnouncement/Announcement.styles";

export const Wrapper = styled(AnnouncementWrapper)`
  ${setFlex({ direction: "column" })};

  width: 100%;
  height: 35rem;

  .announcement-top {
    ${setFlex({ justify: "center" })};

    width: 100%;
    height: auto;

    img {
      width: 20rem;
      height: 20rem;
      object-fit: cover;
    }
  }

  .announcement-bot {
    ${setFlex({ direction: "column" })};

    height: 13rem;

    .title {
      font-weight: 400;
      word-break: break-all;
    }

    .info {
      margin-top: auto;
      
      .location {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .time {
        font-size: 1.4rem;
        font-weight: 300;
      }

      .price {
        font-size: 1.9rem;
      }
    }
  }
`;
