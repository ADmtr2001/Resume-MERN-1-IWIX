import React, { useEffect, useState } from "react";

import { scrollToTop } from "../../../utils";

import { Wrapper } from "./ScrollToTopButton.styles";
import { AiOutlineArrowUp } from "../../../common/icons";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <Wrapper onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </Wrapper>
  );
};

export default ScrollToTopButton;
