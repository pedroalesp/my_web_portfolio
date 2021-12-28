import React from "react";
import { Link } from "react-router-dom";

import { StyledNav } from "../assets/styles/components/Styles";

const Nav = () => (
  <StyledNav>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/projects">Projects</Link>
      </li>
      <li>
        <a href="https://blog.devbypedro.com/" target="_blank">
          Blog
        </a>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  </StyledNav>
);

export default Nav;
