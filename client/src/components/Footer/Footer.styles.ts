import styled from "styled-components";
import { setShadowForSection } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.footer`
  background-color: ${(props) => props.theme.light2};
  height: 15rem;
  margin-top: 2rem;
  ${setShadowForSection()};
`;
