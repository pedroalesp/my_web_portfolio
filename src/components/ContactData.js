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
    <a>
      <div>
        <img src={email} />
        me@devbypedro.com
      </div>
    </a>
    <a
      href="https://linkedin.com/in/pedro-alejandro-silva-perez"
      target="_blank"
    >
      <div>
        <img src={linkedin} />
        Pedro Alejandro Silva Perez
      </div>
    </a>
    <a href="https://github.com/pedroalesp" target="_blank">
      <div>
        <img src={github} />
        pedroalesp
      </div>
    </a>
    <a href="https://twitter.com/devbypedro" target="_blank">
      <div>
        <img src={twitter} />
        @devbypedro
      </div>
    </a>
    <a href="https://instagram.com/devbypedro" target="_blank">
      <div>
        <img src={instagram} />
        @devbypedro
      </div>
    </a>
  </ContactDataContainer>
);

export default ContactData;
