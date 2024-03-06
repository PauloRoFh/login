import styled from 'styled-components'

export const Container = styled.div`
display: flex;
width: 100%;
height: 100%;
padding: 20px 56px 804px 56px;
justify-content: center;
align-items: center;
`

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
  }

  &:active {
    background: var(--Atlantis-800, #2A4C0D);
  }
`