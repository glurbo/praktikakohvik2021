import React from "react"
import styled from "styled-components"
import HeaderImage from "../../images/svg/HeaderImage.svg"
import { FormattedMessage } from "gatsby-plugin-intl"
import { Container, TextGroup } from "../global"

const Header = () => {
  


  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <TextGroup id="headerGroup">
            <h1><FormattedMessage id="header.title"/></h1>
            <h2><FormattedMessage id="header.secondaryTitle"/></h2>
            <p><FormattedMessage id="header.content"/></p>
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
