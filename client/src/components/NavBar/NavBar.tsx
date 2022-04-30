import React, { useCallback, useRef, useState } from "react";
import Button from "../UI/Button/Button";

import { Wrapper } from "./NavBar.styles";

import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { GrFormAdd } from "react-icons/gr";
import StyledLink from "../UI/StyledLink/StyledLink";
import { BiLogIn } from "react-icons/bi";

const NavBar = () => {
  const user = false;
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
        {user ? (
          <>
            <div ref={openMenuButtonRef}>
              <Button onClick={toggleMenu} isActive={isMenuActive}>
                <span
                  className={
                    isMenuActive
                      ? "menu-button-text rotated"
                      : "menu-button-text"
                  }
                >
                  Profile
                </span>
                <div
                  className={
                    isMenuActive ? "more-menu active-more-menu" : "more-menu"
                  }
                >
                  <Link to='/user'>My Profile</Link>
                  <Link to='/' onClick={() => console.log("logout")}>
                    Logout
                  </Link>
                </div>
              </Button>
            </div>
            <StyledLink to='/creation'>
              <span>Create</span> <GrFormAdd />
            </StyledLink>
          </>
        ) : (
          <StyledLink to='/auth'>
            <span>Login</span> <BiLogIn />
          </StyledLink>
        )}
      </div>
    </Wrapper>
  );
};

export default NavBar;
