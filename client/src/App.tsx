import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";

import { Wrapper } from "./styles/App.styles";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <AppRouter />
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
