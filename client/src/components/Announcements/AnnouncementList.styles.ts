import styled from "styled-components";
import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.light2};
  padding: 2rem;

  ${setShadowForSection()};

  .announcement-title {
    font-size: 4rem;
    text-align: center;
  }

  .announcements-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  .announcements-line {
    ${setFlex({ direction: "column" })}
    padding: 0 5rem;
    gap: 2rem;
  }
`;
