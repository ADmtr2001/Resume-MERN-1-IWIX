import React from "react";

import { Wrapper } from "./Footer.styles";

import { BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <Wrapper>
      <div className='content'>
        <div className='col'>
          <a href='#'>Як продавати й купувати?</a>
          <a href='#'>Правила безпеки</a>
          <a href='#'>Популярні запити</a>
        </div>
        <div className='col'>
          <a href='#'>Бізнес на OLX</a>
          <a href='#'>Для преси</a>
          <a href='#'>Реклама на сайті</a>
        </div>
        <div className='col'>
          <a href='#'>Блог OLX</a>
          <a href='#'>Умови користування</a>
          <a href='#'>Політика конфіденційності</a>
        </div>
      </div>
      <div className='my-socials'>
        <a href='https://github.com/ADmtr2001' target='_blank'>
          <BsGithub />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
