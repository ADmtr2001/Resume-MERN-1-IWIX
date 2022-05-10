import styled from "styled-components";

import { setFlex } from "../../styles/mixins/mixins.styles";

interface WrapperProps {
  short: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${(props) => (props.short ? "" : setFlex({ align: "center" }))};

  .user-image {
    width: 8rem;
    height: 8rem;

    margin-right: 1rem;

    border-radius: 50%;

    img {
      height: 100%;
      width: 100%;

      border: 0.2rem solid ${(props) => props.theme.dark1};
      border-radius: 50%;
    }
  }

  .user-info {
    .user-name {
      text-transform: capitalize;
    }

    .user-register-date {
      font-weight: 300;
    }
  }
`;
