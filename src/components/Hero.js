import React from "react";

import { StyledHero, HeroIcon } from "../assets/styles/components/Styles";
import AnimatedDescription from "./AnimatedDescription";

import clone from "../assets/static/clone.svg";

const Hero = () => (
  <StyledHero>
    <HeroIcon>
      <img src={clone} alt="Trooper" />
    </HeroIcon>
    <h3>👋Hello there</h3>
    <h1>
      I’m <span>Pedro Silva</span>
    </h1>
    <AnimatedDescription />
  </StyledHero>
);

export default Hero;
