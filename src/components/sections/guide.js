import React from "react"
import styled from "styled-components"
import { Container } from "../global"
import content from "../content"
import parse from 'html-react-parser'
import {graphql, useStaticQuery} from "gatsby";
import { FormattedMessage } from "gatsby-plugin-intl"


const Guide = () => {

    const data = useStaticQuery(graphql`
        query {
            image1: file(sourceInstanceName: { eq: "png" }, name: { eq: "registration1" }) {
            publicURL
            },
            image2: file(sourceInstanceName: { eq: "png" }, name: { eq: "registration2" }) {
            publicURL
            },
            image3: file(sourceInstanceName: { eq: "png" }, name: { eq: "verify1" }) {
            publicURL
            },
            image4: file(sourceInstanceName: { eq: "png" }, name: { eq: "verify2" }) {
            publicURL
            }
        }
    `);

        return (
            <GuideWrapper>
                <Container>

                    <TextGroup>
                    <Title><FormattedMessage id="guide.textBox1.title"/></Title>
                        <p><FormattedMessage id="guide.textBox1.content" 
                                             values={{a: chunks => (
                                                <a 
                                                    target="_blank" 
                                                    href="https://www.discord.com/download"
                                                >
                                                    {chunks}
                                                </a>
                                            )}}
                        />
                        </p>
                    </TextGroup>
                    <ImageWrapper>
                        <StyledImage src={data.image1.publicURL}/>
                    </ImageWrapper>
                    

                    <TextGroup>
                    <Title><FormattedMessage id="guide.textBox2.title"/></Title>
                        <p><FormattedMessage id="guide.textBox2.content" values={{i: chunks => <i>{chunks}</i>}}/></p>  
                    </TextGroup>
                    <ImageWrapper>
                        <StyledImage src={data.image2.publicURL}/>
                    </ImageWrapper>
                    
                    <Flex>
                        <TextGroup>
                            <p><FormattedMessage id="guide.textBox3.content"/></p>
                            
                        </TextGroup>
                        <ImageWrapper>
                            <StyledImage src={data.image3.publicURL}/>
                        </ImageWrapper>
                    </Flex>
                    
                    <TextGroup>
                        <p><FormattedMessage id="guide.textBox4.content" values={{i: chunks => <i>{chunks}</i>}}/></p>
                    </TextGroup>    
                    <ImageWrapper>
                        <StyledImage src={data.image4.publicURL}/>
                    </ImageWrapper>
                    
                
                </Container>
            </GuideWrapper>
        )
}

export default Guide

export const TextGroup = styled.div`
  padding: 15px;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 13px;
    color: ${props => props.theme.color.white.regular};
    font-size: 45px;
    @media (max-width: ${props => props.theme.screen.sm}) {
      ${props => props.theme.font_size.larger};
    }
    line-height: 56px;
    letter-spacing: 2px;
    text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
  }

  p {
    margin: 20px 0;
    color: ${props => props.theme.color.white.regular};
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    text-align: justify;
  }
`

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


const ImageWrapper = styled.div`
  
  justify-self: center;
  align-self: center;
  margin: 20px 0;
  border-radius: 5px;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`

const StyledImage = styled.img`
  border: 2px solid white;
  display: block;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  max-height: 100%;
  border-radius: 5px 5px 5px 5px;
  border-collapse: separate;
  }
`