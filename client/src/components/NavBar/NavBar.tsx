import React, { useCallback, useRef, useState } from "react";

import Button from "../UI/Button/Button";
import Loader from "../UI/Loader/Loader";
import StyledLink from "../UI/StyledLink/StyledLink";
import { Link } from "react-router-dom";

import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { asyncLogout } from "../../store/reducers/user/userActionCreators";

import { Wrapper } from "./NavBar.styles";
import { BiLogIn, GrFormAdd } from "../../common/icons";
import logo from "../../assets/logo.png";

const NavBar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const openMenuButtonRef = useRef<HTMLDivElement>(null);

  const { user, isUserLoading } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    setIsMenuActive((prev) => !prev);
  };

  const closeMenu = useCallback(() => {
    setIsMenuActive(false);
  }, []);

  const logout = () => {
    dispatch(asyncLogout());
  };

  useOutsideAlerter(openMenuButtonRef, closeMenu);

  let buttonsSectionContent: JSX.Element;
  if (isUserLoading) {
    buttonsSectionContent = <Loader />;
  } else {
    if (user) {
      buttonsSectionContent = (
        <>
          <div ref={openMenuButtonRef}>
            <Button onClick={toggleMenu} isActive={isMenuActive}>
              <span
                className={
                  isMenuActive ? "menu-button-text rotated" : "menu-button-text"
                }
              >
                Profile
              </span>
              <div
                className={
                  isMenuActive ? "more-menu active-more-menu" : "more-menu"
                }
              >
                <Link to="/user">My Profile</Link>
                <Link to="/" onClick={logout}>
                  Logout
                </Link>
              </div>
            </Button>
          </div>
          <StyledLink to="/creation">
            <span>Create</span> <GrFormAdd />
          </StyledLink>
        </>
      );
    } else {
      buttonsSectionContent = (
        <StyledLink to="/auth">
          <span>Login</span> <BiLogIn />
        </StyledLink>
      );
    }
  }

  return (
    <Wrapper>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-buttons">{buttonsSectionContent}</div>
    </Wrapper>
  );
};

export default NavBar;
