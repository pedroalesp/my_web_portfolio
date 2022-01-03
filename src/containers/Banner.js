import React from "react";

import { StyledBanner } from "../assets/styles/components/Styles";

import darthvader from "../assets/static/darthvader.png";

const Banner = () => (
  <StyledBanner>
    <h4>Hope to see you later 🙌</h4>
    <div>
      <img src={darthvader} alt="Banner" />
    </div>
    <h3>
      THIS IS <span>THE WAY</span>
    </h3>
  </StyledBanner>
);

export default Banner;
