import styled from "styled-components";

import {
  setFlex,
  setShadowForSection,
} from "../../styles/mixins/mixins.styles";

export const Wrapper = styled.nav`
  height: 6rem;

  background-color: ${(props) => props.theme.light2};

  padding: 0 2.5rem;

  ${setShadowForSection()};

  ${setFlex({ justify: "space-between", align: "center" })}

  .logo {
    width: 10rem;
  }

  .buttons {
    ${setFlex({})};

    > button {
      margin-left: 2rem;
    }

    button:first-child {
      position: relative;

      .more-menu {
        background-color: ${(props) => props.theme.dark1};
        position: absolute;
        top: 4rem;
        left: 0;
        width: 15rem;
        max-height: 0;
        opacity: 0;
        visibility: hidden;
        overflow: hidden;
        transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
          max-height 0.2s ease-in-out, margin-bottom 0.3s ease-in-out;

        li {
          padding: 0.75rem;
          border-top: 1px solid black;

          &:hover {
            background-color: ${(props) => props.theme.dark2};
          }
        }
      }

      .active-more-menu {
        position: absolute;
        opacity: 1;
        visibility: visible;
        max-height: 100vh;
        margin-bottom: 8px;
        transition: max-height 1s;
      }
    }

    .menu-button-text::after {
      content: "^";
      display: inline-block;
      position: relative;
      top: 2px;
      left: 4px;
      font-size: 1em;
      transform: rotate(90deg);
      transition: all 0.3s;
    }

    .menu-button-text.rotated::after {
      transform: rotate(180deg);
      top: -2px;
    }
  }
`;
