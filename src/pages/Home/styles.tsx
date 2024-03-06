import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 20px 55px 56px 55px;
`;

export const HeaderBox = styled.header`
display: flex;
width: 1328px;
height: 76px;
padding: 24px 0px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
`

export const Logo = styled.p`
width: 163px;
height: 64px;
flex-shrink: 0;

color: var(--Atlantis-50, #F3FBEA);
font-size: 48px;
font-style: normal;
font-weight: 800;
line-height: normal;
`

export const BottonHeader = styled.div`
display: flex;
width: 266px;
height: 45px;
padding: 12px 0px;
justify-content: space-between;
align-items: center;
flex-shrink: 0;
`

export const BottonTitle = styled.button`
  color: var(--Atlantis-50, #F3FBEA);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  background: none;
  border: none;
`

export const BottonLogin = styled.button`
  width: 133px;
  height: 45px;
  flex-shrink: 0;

  border: transparent;
  border-radius: 8px;
  background: var(--Atlantis-600, #519020);

  color: var(--Atlantis-50, #F3FBEA);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:hover {
    background: var(--Atlantis-700, #3D6F14);
    cursor: pointer;

    transform: scale(1.1);
    transition: transform 150ms ease-in-out;
  }

  &:active {
    background: var(--Atlantis-800, #2A4C0D);
  }
`
export const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 22px;
`

export const BoxMain = styled.div`
width: 1330px;
height: 416px;

border-radius: 16px;
background: var(--Celadon-900, #214629);
`
export const BoxSub = styled.div`
  flex: 1 0 0;
  align-self: stretch;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const BoxIntem = styled.div`
width: 653px;
height: 294px;

border-radius: 16px;
background: var(--Atlantis-200, #CBEDA9);

transition-property: box-shadow, transform;
  transition-duration: 350ms;
  transition-timing-function: ease;

  box-shadow: 0px 2px 4px 0px rgba(44, 44, 44, 0.24);

  
  &:hover, &:focus {
    box-shadow: 0px 8px 10px 1px rgba(34, 33, 33, 0.2);
  transform: translateY(-8px);
  }
`
