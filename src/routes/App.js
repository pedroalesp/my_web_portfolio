import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../containers/Home";

import GlobalStyles from "../assets/styles/components/GlobalStyles";

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default App;
