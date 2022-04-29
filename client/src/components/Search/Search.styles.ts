import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};

  margin: 2rem auto 0;
  padding: 1rem;

  ${setShadowForSection()};

  width: 60%;
  height: 5rem;

  ${setFlex({})}
`;
