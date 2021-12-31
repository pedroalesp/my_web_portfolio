import React from "react";

import { Container, ContactContaier } from "../assets/styles/components/Styles";
import NavBar from "../components/NavBar";
import ContactData from "../components/ContactData";
import Form from "../components/Form";

const Contact = () => (
  <Container>
    <NavBar>
      <h2>Contact</h2>
    </NavBar>
    <ContactContaier>
      <ContactData />
      <Form />
    </ContactContaier>
  </Container>
);

export default Contact;
