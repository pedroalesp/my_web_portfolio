import React from "react";

import { StyledHero, HeroIcon } from "../assets/styles/components/Styles";

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
    <h2>Frontend Dev, Backend Dev,</h2>
    <h2>Copywriter, Jedi Knight</h2>
  </StyledHero>
);

export default Hero;
