/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-content">
        <div className="col col1">
          <a href="#">Як продавати й купувати?</a>
          <a href="#">Правила безпеки</a>
          <a href="#">Популярні запити</a>
        </div>
        <div className="col col2">
          <a href="#">Бізнес на OLX</a>
          <a href="#">Для преси</a>
          <a href="#">Реклама на сайті</a>
        </div>
        <div className="col col3">
          <a href="#">Блог OLX</a>
          <a href="#">Умови користування</a>
          <a href="#">Політика конфіденційності</a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;
