import React, { useRef } from "react";
import FormLabel from "../headings/FormLabel";
import InputText from "../inputs/inputText/InputText";
import { Container } from "./SignupForm.styled";

const SignupForm = () => {
  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <Container>
        <FormLabel title={"Create your account"} />
        <InputText
          type={"text"}
          // label={"First Name"}
          placeholder={"Full Name"}
          name="fullName"
          ref={fullNameRef}
        />
        <InputText
          type={"text"}
          // label={"Email"}
          placeholder={"Email"}
          name="email"
          ref={emailRef}
        />
        <InputText
          type={"password"}
          // label={"Password"}
          placeholder={"Password"}
          name="password"
          ref={passwordRef}
        />
      </Container>
    </div>
  );
};

export default SignupForm;
