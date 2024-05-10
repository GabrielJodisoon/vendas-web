import { useState } from "react";

import Button from "../../../shared/components/buttons/button/Button";
import Input from "../../../shared/components/inputs/input/Input";
import {
  BackgroundImage,
  ContainerLogin,
  ContainerLoginScreen,
  LimitedContainer,
  LogoImg,
  TitleLogin,
} from "../styles/loginScreen.styles";
import { useRequests } from "../../../shared/hooks/useRequests";
import { UserType } from "../types/UserTypes";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postRequest, loading } = useRequests();

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    postRequest<UserType>("http://localhost:8080/auth", {
      email: email,
      password: password,
    });


  };

  return (
    <ContainerLoginScreen>
      <BackgroundImage src="./bg.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImg src="./logo.png" />
          <TitleLogin level={2} type="warning">
            Login
          </TitleLogin>
          <Input
            title="Email"
            margin="24px 0px 16px 0px"
            placeholder="email@email.com"
            onChange={handleUsername}
            value={email}
          />
          <Input
            type="password"
            title="Senha"
            margin="24px 0px 16px 0px"
            placeholder="Senha"
            onChange={handlePassword}
            value={password}
          />
          <Button loading={loading} type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>
            Entrar
          </Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen>
  );
};

export default LoginScreen;
