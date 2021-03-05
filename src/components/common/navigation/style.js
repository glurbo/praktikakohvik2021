import styled from "styled-components"

import { Container } from "../../global"

export const Title = styled.span`
  color: white;
  font-size: 30px;
  letter-spacing: 5px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    font-size: 100%
  }
  @media (max-width:${props => props.theme.screen.sm}) {
    
  }
  -webkit-text-stroke: 1px black;
  text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`

export const Nav = styled.nav`
  padding: ${props => (props.scrolled ? `16px 0` : `24px 0`)};
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  background: ${props => props.theme.color.primary};
  
  transition: 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
  
  border-bottom: 5px solid;
  transition: border-bottom 0.25s, background 0.25s, padding 0.25s;
  border-image: linear-gradient(to right, ${props => props.theme.color.secondary}, ${props => props.theme.color.tertiary} ) 1;
`
// border-bottom: 5px ${props => (props.scrolled ? "solid" : "transparent")};
// background: ${props => (props.scrolled ? props.theme.color.primary : "white")};


export const MobileButton = styled.button`
  color: ${props => props.theme.color.tertiary};
  background: none;
`

export const MobileMenuItem = styled.div`
  color: ${props => (props.scrolled ? props.theme.color.primary : "white")};
  font-family: ${props => props.theme.font.extrabold};
  font-size: 18px;
  letter-spacing: 1px;
  -webkit-text-stroke: 1px black;
`

/*export const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`*/

export const StyledContainer = styled(Container)`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto auto;
  align-items: center;
`

export const Flex = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-items: stretch;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`


export const NavListWrapper = styled.div`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;

    ${({ mobile }) =>
      mobile &&
      `
        flex-direction: column;
        margin-top: 1em;

        > ${NavItem} {
          margin: 0;
          margin-top: 0.75em;
        }
      `};
  }
`

export const NavItem = styled.li`
  margin: 0 0.75em;
  font-family: ${props => props.theme.font.medium};
  ${props => props.theme.font_size.xsmall};

  a {
    text-decoration: none;
    opacity: 0.9;
    color: ${props => props.theme.color.black.regular};
  }

  &.active {
    a {
      opacity: 1;
    }
  }
`

export const MobileMenu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 1000;
  background: ${props => props.theme.color.regular};
`

export const Brand = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 95%;
  }
  @media (max-width: 400) {
    width: 50%;
  }
  margin: 0;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    a {
      color: ${props => props.theme.color.black.regular};
      text-decoration: none;
    }
  }
`
export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: none;
  }
`


export const HeaderButton = styled.button`
  
  font-family: ${props => props.theme.font.normal};
  ${props => props.theme.font_size.xsmall};
  
  padding: 10px 16px;
  height: 45px;
  display: block;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => (props.scrolled ? "white" : props.theme.color.primary)};
  margin: 0 10px;
  transition: 0.15s;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    background: ${props => props.theme.color.tertiary};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
  text-shadow:
       2px 2px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`

export const activeStyles = {
  background: props => props.theme.color.tertiary
  }

export const HeaderButtonText = styled.span`
  color: white;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 1px;
  @media (max-width: ${props => props.theme.screen.md}) {
    font-size: 18px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
    font-size: 15px;
  }
`

export const Mobile = styled.div`
  display: none;
  margin: 1em;
  @media (max-width: ${props => props.theme.screen.xs}) {
    display: block;
  }

  ${props =>
    props.hide &&
    `
    display: block;

    @media (max-width: ${props.theme.screen.xs}) {
      display: none;
    }
  `}
`

// Background blur info
// background-color: ${props => props.scrolled && `rgba(245, 245, 250, .8`};
// box-shadow:  ${props =>
//   props.scrolled &&
//   `0 0 0 1px rgba(0,0,50,.02) inset, 0 1px 1px rgba(0,0,50,.05) inset, 0 2px 4px rgba(0,0,50,.04) inset`};
//   backdrop-filter: ${props => props.scrolled && `blur(15px)`};
