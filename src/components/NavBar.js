import React from "react";
import { Link } from "react-router-dom";

import { StyledNavBar } from "../assets/styles/components/Styles";

import arrow from "../assets/static/arrow.png";

const NavBar = ({ children }) => (
  <StyledNavBar>
    <Link to="/">
      <img src={arrow} alt="Back Arrow" />
    </Link>
    {children}
  </StyledNavBar>
);

export default NavBar;
