import React, { useState, useRef } from "react";

import { FormContainer, StyledForm } from "../assets/styles/components/Styles";

const Form = () => {
  const [form, setValues] = useState({ name: "", email: "", message: "" });
  const emailRef = useRef();

  const handleChange = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailRef.current.click();
  };

  return (
    <FormContainer>
      <h2>Or send me an email</h2>
      <StyledForm onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          aria-label="Name"
          type="text"
          placeholder="Your name"
        />
        <input
          name="email"
          onChange={handleChange}
          aria-label="Email"
          type="email"
          placeholder="Your email"
        />
        <input
          name="message"
          onChange={handleChange}
          aria-label="Message"
          type="text"
          placeholder="Your message"
        />
        <button className="button">Send email</button>
        <a
          href={`mailto:me@devbypedro.com?subject=${form.name}, ${form.email}&body=${form.message}`}
          ref={emailRef}
        >
          mail
        </a>
      </StyledForm>
    </FormContainer>
  );
};

export default Form;
