import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

import { Container } from "../assets/styles/components/Styles";

const Home = () => (
  <Container>
    <Hero />
    <Nav />
  </Container>
);

export default Home;
