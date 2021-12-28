import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import {
  AboutContainer,
  AboutContainerPic,
  AboutContainerContent,
  AboutContainerIntro,
  DownloadButton,
  AboutContainerEpiloge,
} from "../assets/styles/components/Styles";

import profile from "../assets/static/about_pic.jpg";

const About = () => (
  <AboutContainer>
    <NavBar>
      <h2>About Me</h2>
    </NavBar>
    <AboutContainerContent>
      <AboutContainerPic>
        <img src={profile} alt="Profile pic" />
      </AboutContainerPic>
      <AboutContainerIntro>
        <h3>Hi, my name is Pedro 👋</h3>
        <p>
          I have become a web developer by following the ways of the force.{" "}
          <br />I Completed my training{" "}
          <strong>
            doing personal projects using React js and Frontend Technologies
          </strong>{" "}
          . Also I am a{" "}
          <strong>padawan Backend Developer with Python and FastAPI.</strong>
        </p>
        <p>
          I am <strong>passionate about software development world</strong> and
          the way it improves people’s life. Also I found a little pleasure in
          writing, so I decided to develop my{" "}
          <strong>Copywriting and UX Writing skills </strong>✍
        </p>
        <a
          href="../assets/FullStack_Dev.pdf"
          download="FullStack_Dev_Pedro_Silva.pdf"
        >
          <DownloadButton>👉Download my CV</DownloadButton>
        </a>
      </AboutContainerIntro>
    </AboutContainerContent>
    <AboutContainerEpiloge>
      <p>
        You can{" "}
        <Link to="/projects">
          <strong>check out my latest projects↗ </strong>
        </Link>{" "}
        to see what I’ve been learning or
        <a href="https://blog.devbypedro.com/" target="_blank">
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
  </AboutContainer>
);

export default About;
