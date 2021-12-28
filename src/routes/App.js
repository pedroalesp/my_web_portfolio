import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../containers/Home";
import About from "../containers/About";
import Projects from "../containers/Projects";
import Contact from "../containers/Contact";

import GlobalStyles from "../assets/styles/components/GlobalStyles";

const App = () => (
  <BrowserRouter>
    <>
      <GlobalStyles />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
    </>
  </BrowserRouter>
);

export default App;
