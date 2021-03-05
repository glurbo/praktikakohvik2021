import React from "react"
import styled from "styled-components"
import { Container, TextGroup } from "../global"
import content from "../content"
import parse from 'html-react-parser'
import { FormattedMessage } from "gatsby-plugin-intl"


const Guide = () => {
        return (
            <GuideWrapper>
                <Container>
                    <Flex>
                        <TextGroup>
                        <Title><FormattedMessage id="guide.textBox1.title"/></Title>
                            <p><FormattedMessage id="guide.textBox1.content"/></p>
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title><FormattedMessage id="guide.textBox2.title"/></Title>
                            <p><FormattedMessage id="guide.textBox2.content"/></p>  
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title><FormattedMessage id="guide.textBox3.title"/></Title>
                            <p><FormattedMessage id="guide.textBox3.content"/></p>
                        </TextGroup>
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title><FormattedMessage id="guide.textBox4.title"/></Title>
                            <p><FormattedMessage id="guide.textBox4.content"/></p>
                        </TextGroup>    
                    </Flex>
                    <Flex>
                        <TextGroup>
                        <Title><FormattedMessage id="guide.textBox5.title"/></Title>
                            <p><FormattedMessage id="guide.textBox5.content"/></p>
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