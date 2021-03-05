import React from "react"
import styled from "styled-components"
import AboutSvg from "../../images/svg/about.svg"
import { Container, Section, TextGroup } from "../global"
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const About = () => {
 
  return (
  <Section id="üritusest">
    <Container>

      <AboutContainer>
        <ImageDiv>
         <AboutImage src={AboutSvg}/>
        </ImageDiv>

        
        <TextGroup>
          <Title><FormattedMessage id="about.title"/></Title>
          <p><FormattedMessage id="about.mainContent1"/></p>
          <p><FormattedMessage id="about.mainContent2"/></p>
         </TextGroup>
        
      </AboutContainer>

      
    </Container>
  </Section>
  )
}

export default About

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