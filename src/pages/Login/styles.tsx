import styled from 'styled-components'

export const Body = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  backdrop-filter: blur(2px);
`;

export const SignInForm = styled.form`
display: flex;
width: 525px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 16px;
flex-shrink: 0;
`

export const Title = styled.h1`
color: #F5F5F7;
font-size: 4.8rem;
font-style: normal;
font-weight: 400;
line-height: normal;
`

export const InputTitle = styled.p`
color: #F5F5F7;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: normal;

align-items: flex-start;
`

export const InputField = styled.div`
display: flex;
height: 106px;
flex-direction: column;
align-items: flex-start;
gap: 12px;
align-self: stretch;
`

export const Input = styled.input`
display: flex;
width: 525px;
padding: 20px 16px;
justify-content: space-between;
align-items: center;

border-radius: 8px;

background: #242426;

border-color: transparent;

  color: #F5F5F7;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

&:focus {
  border-color: #2074E0
}

&::placeholder {
  color: #454547;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
`

export const InputEmail = styled(Input)`
flex: 1;

`

export const InputPassword = styled(Input)`
flex: 1;
`

export const Button = styled.button`
display: flex;
padding: 16px 116px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;

border-radius: 8px;
background: #2074E0;

box-shadow: none;
border-color: transparent;

color: #F5F5F7;
font-size: 18px;
font-style: normal;
font-weight: 400;
line-height: normal;

&:hover {
    background: #164e96;
    cursor: pointer;
  }

  &:active {
    background: #498de6;
  }
`