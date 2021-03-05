import React from "react"
import styled from "styled-components"
import HeaderImage from "../../images/svg/HeaderImage.svg"

import { Container, TextGroup } from "../global"
import content from "../content"
import parse from 'html-react-parser'

const Header = () => {
  

  return (
    <HeaderWrapper id="top">
      <Container>
        {/* <ImageWrapper>
          <StyledImage src={HeaderImage}></Styled>
        </ImageWrapper> */}
        <Flex>
          <TextGroup id="headerGroup">
              {parse(content.et.header.title)}
              {parse(content.et.header.secondaryTitle)}
              {parse(content.et.header.content)}
          </TextGroup>
          <ImageWrapper>
            <StyledImage src={HeaderImage}/>
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header


// padding 103
const HeaderWrapper = styled.header`
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const Flex = styled.div`
  display: grid;
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
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`

const StyledImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-position: -5px 0;
  }
`
