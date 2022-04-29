import styled from "styled-components";
import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.section`
  background-color: ${(props) => props.theme.light2};
  margin-top: 2rem;
  height: 20rem;
  ${setShadowForSection()};
`;
