import styled from "styled-components";

import { setFlex } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: grey;

  margin: 2rem auto 0;
  padding: 1rem;

  width: 60%;
  height: 5rem;

  ${setFlex({})}
`;
