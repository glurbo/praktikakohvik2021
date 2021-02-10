import React from "react"
import styled from "styled-components"

import { Container, Section} from "../global"


const About = () => {
 
  return (
  <Section id="üritusest">
    <Container>

      <AboutContainer>
        <div>
          <p>Kohvile tulevad üle 30ne kohaliku ja rahvusvahelise firma, kes on saatnud oma arendajad ja värbajad,
            et tudengitega maha istuda ja vastata nende küsimustele.</p>

          <p>Praktikakohvikul saad infomaterjali, kus on välja toodud firmade tutvustused,
            CV koostamise nõuanded ja info kandideerimise kohta. Kirjuta vihikusse küsimused juba ette,
            ning tee vestluse jooksul olulisi märkmeid, et kandideerimisel läheks kõik sujuvalt.</p>
        </div>
        
      </AboutContainer>

      
    </Container>
  </Section>
  )
}

export default About

const AboutContainer = styled.section`
  ${props => props.theme.font_size.small}
  
  color: ${props => props.theme.color.tertiary};
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  div {
    width: 47%;
    
    p {
      line-height: 30px;
    }
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
  max-width: 60%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    max-width: 80%;
  }
`

const ImageDiv = styled.div`
  width: 47%;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`