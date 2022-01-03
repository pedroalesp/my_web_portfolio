import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import AboutContent from "../components/AboutContent";

import {
  Container,
  AboutContainerEpiloge,
} from "../assets/styles/components/Styles";

const About = () => (
  <Container>
    <NavBar>
      <h2>About Me</h2>
    </NavBar>
    <AboutContent />
    <AboutContainerEpiloge>
      <p>
        You can{" "}
        <Link to="/projects">
          <strong>check out my latest projects↗ </strong>
        </Link>{" "}
        to see what I’ve been learning or
        <a href="https://blog.devbypedro.com/" target="_blank" rel="noreferrer">
          <strong> take a look to my blog↗ </strong>
        </a>{" "}
        to see what I’m interested in 👀
      </p>
      <p>
        I am <strong>currently looking for new opportunities</strong> 🙌 If you
        like what you see,{" "}
        <Link to="/contact">
          <strong>let’s get in touch!↗</strong>
        </Link>
      </p>
    </AboutContainerEpiloge>
  </Container>
);

export default About;
