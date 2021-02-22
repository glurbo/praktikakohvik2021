import React from "react"
import styled from "styled-components"
import QuestionsSvg from "../../images/svg/questions.svg"
import { Section, Container, TextGroup } from "../global"

const Questions = () => (
  <Section id="küsimused">
    <Container>
      <QuestionsContainer>
        <TextGroup>
          <Title>Mida küsida?</Title>
          <SubText>Siin on mõned näited küsimustest, mida esitada tööandjatele.</SubText>

          <List>
            <li>Mis oskusi on vaja, et mingile kohale kandideerida?</li>
            <li>Milliseid tehnoloogiad firmas kasutatakse?</li>
            <li>Mida oodata palga suhtes?</li>
            <li>Milline näeb välja kontori igapäev?</li>
            <li>Milline on töökoormus?</li>
            <li>Kui paindlik on tudengina tööl käimise juures graafik või koormus?</li>
            <li>Mis on ettevõttes arenemisvõimalused? Kas pakutakse mingeid lisakoolitusi?</li>
          </List>
        </TextGroup>
        <ImageDiv>
         <QuestionsImage src={QuestionsSvg}/>
        </ImageDiv>
          
      </QuestionsContainer>
      
    </Container>
  </Section>
)

export default Questions

const Title = styled.h1`
  text-align: center;
`

const QuestionsContainer = styled.section`
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

const List = styled.ul`
  margin: 20px auto;
  li {
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.primary};
    font-size: 20px;
    margin: 16px auto;
  }
`

const SubText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.secondary};
`

const QuestionsImage = styled.img`
  max-width: 100%;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    max-width:100%;
  }
`

const ImageDiv = styled.div`
  width: 47%;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
  }
`

