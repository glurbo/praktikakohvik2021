import React from "react"
import styled from "styled-components"
import { Container, TextGroup } from "../global"
import content from "../content"
import parse from 'html-react-parser'


const Guide = () => {
        return (
            <GuideWrapper>
                <Container>
                    <Flex>
                        <TextGroup>
                        <Title>{content.et.guide.textBox1.title}</Title>
                            {parse(content.et.guide.textBox1.content)}
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title>{content.et.guide.textBox2.title}</Title>
                            {parse(content.et.guide.textBox2.content)}    
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title>{content.et.guide.textBox3.title}</Title>
                            {parse(content.et.guide.textBox3.content)}   
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title>{content.et.guide.textBox4.title}</Title>
                            {parse(content.et.guide.textBox4.content)}
                        </TextGroup>    
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title>{content.et.guide.textBox5.title}</Title>
                            {parse(content.et.guide.textBox5.content)}
                        </TextGroup>
                    </Flex>
                
                </Container>
            </GuideWrapper>
        )
}

export default Guide

const GuideWrapper = styled.section`
  padding: 160px 0 80px 0;
  position: relative;
`

const Title = styled.h1`
  text-align: center;
`

const Flex = styled.div`
display: grid;
margin: 20px 0;
justify-content: space-between;
align-content: center;
grid-template-columns: 1fr 1fr;
@media (max-width: ${props => props.theme.screen.md}) {
  grid-template-columns: 1fr;
}
`