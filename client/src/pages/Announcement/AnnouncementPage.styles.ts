import styled from "styled-components";
import { setFlex } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.main`
  .top-info {
    margin-top: 2rem;
    ${setFlex({ justify: "space-between" })}
    height: 50rem;

    .image {
      background-color: grey;
      width: 58%;
    }

    .user {
      background-color: grey;
      width: 40%;
    }
  }

  .bot-info {
    margin-top: 2rem;
    height: 50rem;
    ${setFlex({ justify: "space-between" })}

    .description {
      background-color: grey;
      width: 58%;
    }

    .comments {
      background-color: grey;
      width: 40%;
    }
  }

  .announcements {
    margin-top: 2rem;

    div {
      background-color: grey;
      height: 20rem;
    }

    div + div {
      margin-top: 2rem;
    }
  }
`;
