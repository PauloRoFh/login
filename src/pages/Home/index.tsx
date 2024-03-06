import { BottonHeader, BottonLogin, BottonTitle, Container, HeaderBox, Logo } from './styles' 

export function Home() {
  return (
    <Container>
      <HeaderBox>
        <Logo>Lontras</Logo>
        <BottonHeader>
          <BottonTitle>Sobre</BottonTitle>
          <BottonTitle>Contato</BottonTitle>
          <BottonTitle>Produtos</BottonTitle>
        </BottonHeader>
        <BottonLogin
          onClick={() => {
            window.location.href = "/login";
          }}
        >
          LOGIN
        </BottonLogin>
      </HeaderBox>
    </Container>
  )
}