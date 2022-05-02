import React, { useEffect } from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import { useAppDispatch } from "./hooks/redux";
import { asyncFetchAnnouncements } from "./store/reducers/announcement/announcementActionCreators";
import { asyncFetchCategories } from "./store/reducers/category/categoryActionCreators";
import { asyncCheckAuth } from "./store/reducers/user/userActionCreators";

import { Wrapper } from "./styles/App.styles";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncCheckAuth());
    dispatch(asyncFetchCategories());
    dispatch(asyncFetchAnnouncements());
  });

  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <div className='content'>
          <AppRouter />
        </div>
        <Footer />
        <ScrollToTopButton />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
