import React from "react";
import { Link } from "react-router-dom";

import { StyledNav } from "../assets/styles/components/Styles";

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/">About</Link>
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
