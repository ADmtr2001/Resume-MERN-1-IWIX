import React, { useEffect } from "react";

import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import DeleteModal from "./components/UI/Modal/DeleteModal/DeleteModal";
import ScrollToTopButton from "./components/UI/ScrollToTopButton/ScrollToTopButton";

import { useAppDispatch } from "./hooks/redux";
import { setIsGridView } from "./store/reducers/appState/appStateSlice";
import { asyncGetCategories } from "./store/reducers/category/categoryActionCreators";
import { asyncCheckAuth } from "./store/reducers/user/userActionCreators";

import { Wrapper } from "./styles/App.styles";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(asyncCheckAuth());
    dispatch(asyncGetCategories());

    if (localStorage.getItem("isGridView") === "false") {
      dispatch(setIsGridView(false));
    }
  }, []);

  return (
    <Wrapper>
      <NavBar />
      <div className="content">
        <AppRouter />
      </div>
      <Footer />
      <ScrollToTopButton />
      <DeleteModal />
    </Wrapper>
  );
};

export default App;
