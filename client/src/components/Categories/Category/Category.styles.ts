import styled from "styled-components";
import { setFlex } from "../../../styles/mixins/mixins.styles";

export const Wrapper = styled.article`
  width: 10rem;
  height: 10rem;

  margin: 0 2rem 5rem;

  text-align: center;

  border: 0.2rem solid ${(props) => props.theme.dark1};
  border-radius: 50%;

  transition: transform ${(props) => props.theme.fastTransition};

  a {
    ${setFlex({ direction: "column", align: "center" })};

    img {
      border-radius: 50%;
    }
  }

  @media (min-width: 900px) {
    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 480px) {
    width: 7rem;
    height: 7rem;
  }

  @media (max-width: 400px) {
    width: 8rem;
    height: 8rem;
  }
`;
