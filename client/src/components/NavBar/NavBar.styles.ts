import styled from "styled-components";

import { setFlex } from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.nav`
  height: 6rem;

  background-color: grey;

  padding: 0 2rem;

  ${setFlex({ justify: "space-between", align: "center" })}

  .logo {
    font-size: 3rem;
  }
`;
