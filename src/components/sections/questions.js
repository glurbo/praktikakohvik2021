import React from "react"
import styled from "styled-components"
import QuestionsSvg from "../../images/svg/questions.svg"
import { Section, Container, TextGroup } from "../global"
import { FormattedMessage } from "gatsby-plugin-intl"

const Questions = () => (
  <Section id="küsimused">
    <Container>
      <QuestionsContainer>
        <TextGroup>
          <Title><FormattedMessage id="questions.title"/></Title>
          <SubText><FormattedMessage id="questions.subtext"/></SubText>
          <List>
            <li><FormattedMessage id="questions.question1"/></li>
            <li><FormattedMessage id="questions.question2"/></li>
            <li><FormattedMessage id="questions.question3"/></li>
            <li><FormattedMessage id="questions.question4"/></li>
            <li><FormattedMessage id="questions.question5"/></li>
            <li><FormattedMessage id="questions.question6"/></li>
            <li><FormattedMessage id="questions.question7"/></li>
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
    color: ${props => props.theme.color.white.regular};
    font-size: 20px;
    font-weight: 400;
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

