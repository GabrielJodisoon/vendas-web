import { useState } from "react";
import Button from "../../../shared/buttons/button/Button";
import Input from "../../../shared/inputs/input/Input";
import { BackgroundImage, ContainerLogin, ContainerLoginScreen, LimitedContainer, LogoImg, TitleLogin } from "../styles/loginScreen.styles";

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    alert(`username: ${username}, password: ${password}`)
  }

  return (
    <ContainerLoginScreen >
      <BackgroundImage src="./bg.jpg" />
      <ContainerLogin>
        <LimitedContainer>
          <LogoImg src="./logo.png" />
          <TitleLogin level={2} type="warning">Login</TitleLogin>
          <Input title="Usuario" margin="24px 0px 16px 0px" placeholder="Usuario" onChange={handleUsername} value={username} />
          <Input type="password" title="Senha" margin="24px 0px 16px 0px" placeholder="Senha" onChange={handlePassword} value={password} />
          <Button type="primary" margin="64px 0px 16px 0px" onClick={handleLogin}>Entrar</Button>
        </LimitedContainer>
      </ContainerLogin>
    </ContainerLoginScreen >
  );


};

export default LoginScreen;
