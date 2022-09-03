import React, { useRef, useState } from "react";
import { FaApple, FaFacebookF, FaGoogle } from "react-icons/fa";
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
        <p className="text-gray-400 text-center">
          It's Includes a free 2 week trial!
        </p>
        <div className="flex justify-center my-2">
          <a
            href=""
            className="border-2 border-gray-200 rectangle-full p-3 mx-1"
          >
            <FaGoogle className="text-sm" />
          </a>
          <a
            href=""
            className="border-2 border-gray-200 rectangle-full p-3 mx-1"
          >
            <FaApple className="text-sm" />
          </a>
          <a
            href=""
            className="border-2 border-gray-200 rectangle-full p-3 mx-1"
          >
            <FaFacebookF className="text-sm" />
          </a>
        </div>
        <div className="text-center">
          {" "}
          <p className="text-gray-400 my-3">OR</p>
        </div>
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
