import React, { useRef, useState } from "react";
import { SignUpButton } from "../buttons";
import FormLabel from "../headings/FormLabel";
import InputText from "../inputs/inputText/InputText";
import { Container } from "./SignupForm.styled";

const SignupForm = () => {
  const [loading, setLoading] = useState(false);

  const fullNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onSubmit = async () => {
    const fullName = fullNameRef.current?.value;
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(fullName, email, password, "Form value");
  };
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
        <SignUpButton
          label={loading ? "Loading..." : "Start your 2-weeks trial"}
          fill="true"
          onClick={() => onSubmit()}
          disabled={loading}
        />
      </Container>
    </div>
  );
};

export default SignupForm;
