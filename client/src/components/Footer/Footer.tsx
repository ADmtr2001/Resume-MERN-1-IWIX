/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        <div className="col col1">
          <a href="/#">How to sell and buy?</a>
          <a href="/#">Safety rules</a>
          <a href="/#">Popular queries</a>
        </div>
        <div className="col col2">
          <a href="/#">Business on IWIX</a>
          <a href="/#">For the press</a>
          <a href="/#">Advertising on the site</a>
        </div>
        <div className="col col3">
          <a href="/#">IWIX Blog</a>
          <a href="/#">Terms of use</a>
          <a href="/#">Privacy policy</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
