import React, { useCallback, useRef, useState } from "react";
import Button from "../UI/Button/Button";

import { Wrapper } from "./NavBar.styles";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const openMenuButtonRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setIsMenuActive(false);
  }, []);

  useOutsideAlerter(openMenuButtonRef, closeMenu);

  return (
    <Wrapper>
      <div className='logo'>
        <Link to='/'>
          <img src={logo} alt='logo' />
        </Link>
      </div>
      <div className='buttons'>
        <div ref={openMenuButtonRef}>
          <Button onClick={toggleMenu} isActive={isMenuActive}>
            <span
              className={
                isMenuActive ? "menu-button-text rotated" : "menu-button-text"
              }
            >
              Profile
            </span>
            <ul
              className={
                isMenuActive ? "more-menu active-more-menu" : "more-menu"
              }
            >
              <li>
                <Link to='/user'>My Profile</Link>
              </li>
              <li>
                <Link to='/' onClick={() => console.log("logout")}>
                  Logout
                </Link>
              </li>
            </ul>
          </Button>
        </div>
        <Button>
          <Link to='/creation'>Create</Link>
        </Button>
      </div>
    </Wrapper>
  );
};

export default NavBar;
