import React from "react";

import profile from "../assets/static/about_pic.jpg";

import {
  AboutContainerPic,
  AboutContainerContent,
  AboutContainerIntro,
  Button,
} from "../assets/styles/components/Styles";

const AboutContent = () => (
  <AboutContainerContent>
    <AboutContainerPic>
      <img src={profile} alt="Profile pic" />
    </AboutContainerPic>
    <AboutContainerIntro>
      <h3>Hi, my name is Pedro 👋</h3>
      <p>
        I have become a web developer by following the ways of the force. <br />
        I Completed my training{" "}
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
        <Button>👉Download my CV</Button>
      </a>
    </AboutContainerIntro>
  </AboutContainerContent>
);

export default AboutContent;
