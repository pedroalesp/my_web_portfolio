import React from "react";
import { Link } from "react-router-dom";

import { StyledNav } from "../assets/styles/components/Styles";

const Nav = ({ isHome }) => (
  <StyledNav show={isHome ? true : null}>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Projects</Link>
      </li>
      <li>
        <Link to="/">Blog</Link>
      </li>
      <li>
        <Link to="/">Contact</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
