import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setCurrentPage } from "../../store/reducers/announcement/announcementSlice";
import Button from "../UI/Button/Button";

import { Wrapper } from "./Pagination.styles";

const Pagination = () => {
  const { currentPage, numberOfPages } = useAppSelector(
    (state) => state.announcement
  );
  const dispatch = useAppDispatch();
  const step = 2;

  if (numberOfPages <= 1) {
    return null;
  }

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const generateFirstPageWithSeparator = () => {
    return [
      <button
        key={1}
        className={currentPage === 1 ? "active" : ""}
        onClick={() => handlePageChange(1)}
      >
        1
      </button>,
      <button disabled>...</button>,
    ];
  };

  const generateLastPageWithSeparator = () => {
    return [
      <button disabled>...</button>,
      <button
        key={numberOfPages}
        className={currentPage === numberOfPages ? "active" : ""}
        onClick={() => handlePageChange(numberOfPages)}
      >
        {numberOfPages}
      </button>,
    ];
  };

  const generatePages = (from: number, to: number) => {
    let generatedButtons: JSX.Element[] = [];
    for (let i = from; i <= to; i++) {
      generatedButtons.push(
        <button
          key={i}
          className={currentPage === i ? "active" : ""}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }
    return generatedButtons;
  };

  const moveToPreviousPage = () => {
    const newPage = currentPage - 1;
    if (newPage < 1) {
      dispatch(setCurrentPage(1));
    } else {
      dispatch(setCurrentPage(newPage));
    }
  };

  const moveToNextPage = () => {
    const newPage = currentPage + 1;
    if (newPage > numberOfPages) {
      dispatch(setCurrentPage(numberOfPages));
    } else {
      dispatch(setCurrentPage(newPage));
    }
  };

  let buttons: JSX.Element[];
  if (numberOfPages < step * 2 + 5) {
    buttons = generatePages(1, numberOfPages);
  } else if (currentPage < step * 2 + 1) {
    buttons = [
      ...generatePages(1, step * 2 + 3),
      ...generateLastPageWithSeparator(),
    ];
  } else if (currentPage > numberOfPages - step * 2) {
    buttons = [
      ...generateFirstPageWithSeparator(),
      ...generatePages(numberOfPages - step * 2 - 2, numberOfPages),
    ];
  } else {
    buttons = [
      ...generateFirstPageWithSeparator(),
      ...generatePages(currentPage - step, currentPage + step),
      ...generateLastPageWithSeparator(),
    ];
  }
  return (
    <Wrapper>
      <button onClick={moveToPreviousPage}>{"<"}</button>
      {buttons}
      <button onClick={moveToNextPage}>{">"}</button>
    </Wrapper>
  );
};

export default Pagination;
