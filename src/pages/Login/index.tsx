import { Body, SignInForm, Title, InputField, InputEmail, InputPassword, InputTitle, Button } from "./styles"; 

export function Login() {
  return (
    <Body>
      <SignInForm>
        <Title>
          Entrar
        </Title>
        <InputField>
          <InputTitle>Endereço de e-mail</InputTitle>
          <InputEmail 
            type="email" 
            placeholder="Digite seu Email" 
          />
        </InputField>
        <InputField>
          <InputTitle>Senha</InputTitle>
          <InputPassword type="password" placeholder="Digite sua Senha" />
        </InputField>
        <Button
         onClick={() => {
          alert("Login realizado com sucesso!");}
         }
        >
          Fazer Login
        </Button>
    </SignInForm>
    </Body>
  );
}