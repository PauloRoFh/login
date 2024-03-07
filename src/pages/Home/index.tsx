import { BottonHeader, BottonLogin, BottonTitle, BoxIntem, BoxMain, BoxSub, Container, HeaderBox, Logo, Main } from './styles' 

export function Home() {
  return (
    <Container>
      <HeaderBox>
        <Logo>Lontras</Logo>
          <BottonHeader>
            <BottonTitle onClick={() => alert('OK')}>Sobre</BottonTitle>
            <BottonTitle onClick={() => alert('OK')}>Contato</BottonTitle>
            <BottonTitle onClick={() => alert('OK')}>Produtos</BottonTitle>
          </BottonHeader>
            <BottonLogin
              onClick={() => {
                window.location.href = "/login";
              }}
            >
              LOGIN
            </BottonLogin>
      </HeaderBox>
      <Main>
         <BoxMain/>
         <BoxSub>
          <BoxIntem></BoxIntem>
          <BoxIntem></BoxIntem>
         </BoxSub>
      </Main>
    </Container>
  )
}