import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";
import { Announcement } from "../AnnouncementBaseStyle/Announcement.styles";

export const Wrapper = styled(Announcement)`
  ${setFlex({})}
  height: 20rem;

  .announcement-left {
    img {
      width: 100%;
      height: 100%;
    }
  }

  .announcement-right {
    margin: 0;
    width: 100%;
    height: 100%;

    ${setFlex({ justify: "space-between" })};

    .left {
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
`;
