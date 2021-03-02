import React from "react"
import styled from "styled-components"
import AboutSvg from "../../images/svg/about.svg"
import { Container, Section, TextGroup } from "../global"


const About = () => {
 
  return (
  <Section id="üritusest">
    <Container>

      <AboutContainer>
        <ImageDiv>
         <AboutImage src={AboutSvg}/>
        </ImageDiv>

        
        <TextGroup>
          <Title>Üritusest</Title>
          <p>Praktikakohvik on TalTechi tudengitele suunatud infopäev, kus kohtuvad ettevõtete esindajad ja tulevased praktikandid. Huvilistel on võimalus küsida spetsialistidelt nende tööd puudutavaid küsimusi ning lähemalt tutvuda oma potentsiaalsete tööandjatega. Üritus toimub Discordis, registreerijatele saadetakse kutse.</p>

          <p>PS! Praktikakohvik on eelkõige suunatud IT-tudengitele, kuid ka teiste teaduskondade üliõpilased võivad leida enda jaoks midagi huvitvat. Üritust korraldab IT-teaduskonna üliõpilaskogu.</p>
        </TextGroup>
        
      </AboutContainer>

      
    </Container>
  </Section>
  )
}

export default About

/*
const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`
*/

const Title = styled.h1`
  text-align: center;
`

const AboutContainer = styled.section`
  ${props => props.theme.font_size.small}
  
  color: ${props => props.theme.color.tertiary};
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  div {
    width: 47%;
    
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  
    
    div {
      width: 100%;
      text-align: center;
    }
  }
`

const AboutImage = styled.img`
  max-width: 100%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`

const ImageDiv = styled.div`
  width: 47%;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`