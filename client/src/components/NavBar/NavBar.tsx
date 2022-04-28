import React from "react";
import Button from "../UI/Button/Button";

import { Wrapper } from "./NavBar.styles";

const NavBar = () => {
  return (
    <Wrapper>
      <div className='logo'>OLVIX</div>
      <div className='buttons'>
        <Button>Hello </Button>
        <Button>Hello</Button>
      </div>
    </Wrapper>
  );
};

export default NavBar;
