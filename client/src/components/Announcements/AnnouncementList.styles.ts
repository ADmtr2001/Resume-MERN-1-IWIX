import styled from "styled-components";
import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  margin-top: 2rem;
  background-color: ${(props) => props.theme.light2};
  padding: 2rem;

  ${setShadowForSection()};

  .announcement-title {
    font-size: 4rem;
    text-align: center;
  }

  .announcements {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }
`;
