import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter/AppRouter";
import NavBar from "./components/NavBar/NavBar";

import { Wrapper } from "./styles/App.styles";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <NavBar />
        <AppRouter />
      </Wrapper>
    </BrowserRouter>
  );
};

export default App;
