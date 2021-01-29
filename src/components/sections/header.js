import React from "react"
import styled from "styled-components"
import banner from "../../images/banner.jpg"
import { Container } from "../global"


  

const Header = () => {

  return (
    <HeaderWrapper>
        <Container>
            <h1>Siin on header</h1> 
            <ImageWrapper>
                <StyledImage src={banner} alt="banner"/>
            </ImageWrapper>
            
        </Container>
       
    </HeaderWrapper>
    
  )
}

export default Header

const HeaderWrapper = styled.header`
padding: 20% 100px 0;
heigth: 200px;
width: 90%;
position: relative;
background-color: red;
`

const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`

const StyledImage = styled.img`
  width: 1000px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 300px;
    display: none;
  }
`