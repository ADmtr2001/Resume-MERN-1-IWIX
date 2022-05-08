import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.nav`
  background-color: ${(props) => props.theme.light2};

  ${setFlex({ justify: "space-between", align: "center" })}

  height: 6rem;
  padding: 0 2.5rem;

  ${setShadowForSection()};

  .logo {
    width: 10rem;
  }

  .buttons {
    ${setFlex({})};

    > a {
      margin-left: 2rem;
    }

    button:first-child {
      position: relative;

      .more-menu {
        background-color: ${(props) => props.theme.dark1};

        position: absolute;
        top: 4rem;
        right: 0;

        width: 15rem;
        max-height: 0;

        opacity: 0;
        visibility: hidden;
        overflow: hidden;

        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
          max-height 0.2s ease-in-out, margin-bottom 0.3s ease-in-out;

        a {
          display: block;
          padding: 0.75rem;

          border-top: 1px solid black;
        }
      }

      .active-more-menu {
        position: absolute;

        max-height: 100vh;
        margin-bottom: 8px;

        opacity: 1;
        visibility: visible;

        transition: max-height 1s;
      }
    }

    .menu-button-text::after {
      content: "➤";

      display: inline-block;

      position: relative;
      top: 0px;
      left: 4px;

      font-size: 1.7rem;

      transform: rotate(0deg);

      transition: all 0.3s;
    }

    .menu-button-text.rotated::after {
      transform: rotate(90deg);

      top: -2px;
    }
  }

  @media (min-width: 900px) {
    button:first-child {
      .more-menu {
        a:hover {
          background-color: ${(props) => props.theme.dark2};
        }
      }
    }
  }

  @media (max-width: 560px) {
    .buttons {
      button {
        width: 5rem;
        height: 5rem;
      }

      > a {
        width: 5rem;
        height: 5rem;

        font-size: 4rem;

        span {
          font-size: 0;
        }
      }

      button:first-child {
        position: static;

        span {
          font-size: 0;
        }

        .more-menu {
          width: 100vw;

          top: 5.5rem;

          font-size: 2.5rem;

          a {
            padding: 1.5rem;
          }
        }
      }

      .menu-button-text::after {
        left: 0;

        font-size: 2.5rem;
      }

      .menu-button-text.rotated::after {
        left: -0.15rem;
        top: 0;

        transform: rotate(90deg);
      }
    }
  }
`;
