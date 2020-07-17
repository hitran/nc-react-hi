import styled from 'styled-components'

export const StyledGrid = styled.div`
  display: grid;
`
export const StyledMenuLeft = styled.ul`
  grid-area: menuLeft;
  position: absolute;
  height: 100vh;
  width: 100%;
  left: ${(props) => (props.isMenuShown ? '0' : '-100%')};
  background-color: white;
  border: 1px solid black;
  transition: 0.2s ease-in-out;
  padding: 50px;
`
export const StyledMenuRight = styled(StyledGrid)`
  grid-area: menuRight;
  grid-template-columns: repeat(4, 1fr);
`
export const StyledMenuCenter = styled.div`
  grid-area: menuCenter;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StyledBurgerButton = styled.div`
  grid-area: burgerButton;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`
export const StyledCloseButton = styled(StyledBurgerButton)`
  position: absolute;
  right: 20px;
  top: 30px;
`

export const StyledHeader = styled(StyledGrid)`
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 6px 2px rgba(60, 64, 67, 0.15);
  color: #202124;
  font-size: 14px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 200;
  box-sizing: border-box;
  grid-area: header;
  grid-template-areas: 'burgerButton . . . . menuCenter menuRight';
`
export const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  justify-content: flex-start;
  flex-direction: column;
  width: 50%;
  height: 100vh;
  right: ${(props) => (props.isMenuShown ? '0' : '-50%')};
  transition: 0.1s ease-in-out;
  align-items: center;
  position: absolute;
  top: 0;
  background-color: white;
  padding-top: 35px;

  @media screen and (min-width: 678px) {
    flex-direction: row;
    right: auto;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    padding-top: 0;
  }
`
export const StyledMenuItem = styled.li`
  text-align: right;
  width: ${(props) => (props.type === 'logo' ? '60%' : 'auto')};
  font-weight: 500;
  color: #7e7e7e;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  border-bottom: 1px solid black;
  width: 90%;
  text-align: center;
  padding-bottom: 10px;
  margin: 10px;
  list-style-type: none;

  @media screen and (min-width: 678px) {
    text-align: center;
    border: none;
    width: auto;
    margin: 20px 10px 0 10px;
  }
`
export const ButtonItem = styled.div`
  width: 30px;
  background-color: black;
  height: 3px;
  margin: 3px;
`

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 20px;
`
