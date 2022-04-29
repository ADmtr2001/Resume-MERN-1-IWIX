import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.article`
  width: 100%;
  height: 35rem;

  background: ${(props) => props.theme.dark1};

  padding: 1rem;

  ${setFlex({ direction: "column" })};

  .announcement-top {
    height: 60%;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .announcement-bot {
    ${setFlex({ direction: "column" })}
    height: 40%;

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
