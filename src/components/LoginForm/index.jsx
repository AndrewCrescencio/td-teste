import { useRouter } from "next/router";
import { useState } from "react";
import { IconEye } from "../icons/IconEye";
import { IconEyeClosed } from "../icons/IconEyeClosed";
import {
  Form,
  Input,
  PasswordContainer,
  ShowPasswordButton,
  SubmitButton,
} from "./styles";

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

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          placeholder="digite seu e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordContainer>
          <Input
            type={isShown ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ShowPasswordButton onClick={(e) => togglePassword(e)}>
            {isShown ? <IconEyeClosed /> : <IconEye />}
          </ShowPasswordButton>
        </PasswordContainer>

        <SubmitButton
          type="submit"
          value="Acessar"
          disabled={(email.length < 8) & (password.length < 3)}
        />
      </Form>
    </>
  );
};
