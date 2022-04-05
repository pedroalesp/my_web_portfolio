import React from "react";

import { StyledAnimatedDescription } from "../assets/styles/components/Styles";

import sable from "../assets/static/sable.png";

const AnimatedDescription = () => (
  <StyledAnimatedDescription background={sable}>
    <ul>
      <li>Frontend Dev</li>
      <li>Python Dev</li>
      <li>Copywriter</li>
      <li>Jedi Knight</li>
    </ul>
  </StyledAnimatedDescription>
);

export default AnimatedDescription;
