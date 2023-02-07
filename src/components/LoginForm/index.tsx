import { Formik, Form, Field } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { IconEye } from "../icons/IconEye";
import { IconEyeClosed } from "../icons/IconEyeClosed";
import {
  // Form,
  Input,
  PasswordContainer,
  ShowPasswordButton,
  SubmitButton,
} from "./styles";

interface LoginFormValues {
  email: string;
  password: string;
  // isShown: boolean;
}

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(false);
  const route = useRouter();

  const togglePassword = (e) => {
    e.preventDefault();
    setIsShown((isShown) => !isShown);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    route.push("/home");
  };

  const initialValues: LoginFormValues = { email: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, actions) => {
        console.log({ values, actions });
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
      }}
    >
      <Form>
        <Field id="email" name="email" placeholder="Digite seu e-mail" />
        <PasswordContainer>
          {/* <Input
            type={isShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setPassword(e.currentTarget.value)
            }
          /> */}
          <Field id="password" name="password" placeholder="Digite sua senha" />

          <ShowPasswordButton onClick={(e) => togglePassword(e)}>
            {isShown ? <IconEyeClosed /> : <IconEye />}
          </ShowPasswordButton>
        </PasswordContainer>

        <SubmitButton
          type="submit"
          value="Acessar"
          // disabled={email.length < 8 && password.length < 3}
        />
      </Form>
    </Formik>
  );
};
