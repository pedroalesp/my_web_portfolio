import React from "react";

import { ContactDataContainer } from "../assets/styles/components/Styles";

import email from "../assets/static/email.png";
import linkedin from "../assets/static/linkedin.png";
import github from "../assets/static/github.png";
import twitter from "../assets/static/twitter.png";
import instagram from "../assets/static/instagram.png";

const ContactData = () => (
  <ContactDataContainer>
    <h2>Let's get in touch!</h2>
    <a href={`mailto:me@devbypedro.com`} rel="noreferrer">
      <div>
        <img src={email} alt="Mail icon" />
        me@devbypedro.com
      </div>
    </a>
    <a
      href="https://linkedin.com/in/pedrosilvaperez"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <img src={linkedin} alt="LinkedIn icon" />
        Pedro Alejandro Silva Perez
      </div>
    </a>
    <a href="https://github.com/pedroalesp" target="_blank" rel="noreferrer">
      <div>
        <img src={github} alt="Github icon" />
        pedroalesp
      </div>
    </a>
    <a href="https://twitter.com/devbypedro" target="_blank" rel="noreferrer">
      <div>
        <img src={twitter} alt="Twitter icon" />
        @devbypedro
      </div>
    </a>
    <a href="https://instagram.com/devbypedro" target="_blank" rel="noreferrer">
      <div>
        <img src={instagram} alt="Instagram icon" rel="noreferrer" />
        @devbypedro
      </div>
    </a>
  </ContactDataContainer>
);

export default ContactData;
