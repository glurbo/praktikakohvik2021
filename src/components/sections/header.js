import React from "react"
import styled from "styled-components"
import HeaderImage from "../../images/svg/HeaderImage.svg"

import { Container, TextGroup } from "../global"

const Header = () => {
  

  return (
    <HeaderWrapper id="top">
      <Container>
        {/* <ImageWrapper>
          <StyledImage src={HeaderImage}></Styled>
        </ImageWrapper> */}
        <Flex>
          <TextGroup id="headerGroup">
            <h1>
              LEIA ENDALE PRAKTIKAKOHT
            </h1>
            <h2>
              17.03 • kell 12:00 • Discordis
            </h2>
            <p>
              Praktikakohvik on IT-tudengitele suunatud infopäev. Tudengitel on võimalus lähemalt tutvuda erinevate ettevõtete ja karjäärivõimalustega ning leida omale unistuste praktikakoht. Liitu ürituse Discordiga ja saa osa TalTechi suurimast praktika infopäevast.
            </p>
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
