import React, { useEffect } from "react";

import { BrowserRouter, useLocation } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import DeleteModal from "./components/UI/Modal/DeleteModal/DeleteModal";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";
import { useAppDispatch } from "./hooks/redux";
import { asyncFetchAnnouncements } from "./store/reducers/announcement/announcementActionCreators";
import { setIsGridView } from "./store/reducers/appState/appStateSlice";
import { asyncFetchCategories } from "./store/reducers/category/categoryActionCreators";
import { asyncCheckAuth } from "./store/reducers/user/userActionCreators";

import { Wrapper } from "./styles/App.styles";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncCheckAuth());
    dispatch(asyncFetchCategories());
    if (localStorage.getItem("isGridView") === "false") {
      dispatch(setIsGridView(false));
    }
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <div className='content'>
        <AppRouter />
      </div>
      <Footer />
      <ScrollToTopButton />
      <DeleteModal />
    </Wrapper>
  );
};

export default App;
