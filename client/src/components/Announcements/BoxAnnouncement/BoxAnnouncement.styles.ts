import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";
import { Announcement } from "../AnnouncementBaseStyle/Announcement.styles";

export const Wrapper = styled(Announcement)`
  width: 100%;
  height: 35rem;

  ${setFlex({ direction: "column" })};

  .announcement-top {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .announcement-bot {
    ${setFlex({ direction: "column" })}
    height: 100%;

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
`;
