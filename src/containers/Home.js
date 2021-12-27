import React from "react";

import Nav from "../components/Nav";
import Hero from "../components/Hero";

import { ContainerHome } from "../assets/styles/components/Styles";

const Home = () => (
  <ContainerHome>
    <Hero />
    <Nav isHome={true} />
  </ContainerHome>
);

export default Home;
