import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
//import { Container } from "../global"
import fb from "../../images/facebook-logo.svg"
import ig from "../../images/instagram.svg"
import ituk from "../../images/ituk.svg"
import ituk_taltech_logo from "../../images/ituktaltechlogo.svg"

const Footer = () => {

  return (
  <FooterWrapper id="footer">
    <FooterColumnContainer>

      <Row>
        <Col align-items="center">
          <img src={ituk_taltech_logo}/>
        </Col>

        <Col>
          <Row>
            <div>test</div>
          </Row>
          <Row>
            <div>test</div>
          </Row>
        </Col>

        <Col>
          <img src={fb} width="50"/>
          <img src={ig} width="50"/>
          <img src={ituk} width="50"/>
        </Col>
      </Row>

    </FooterColumnContainer>
    <Copyright>
      © {new Date().getFullYear()} ITÜK. All rights reserved.
    </Copyright>
  </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.secondary};
  margin: 80px 0 0;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
`

const Copyright = styled.span`
  font-size: 15px;
  color: ${props => props.theme.color.white.lessdark};
  margin: 20px auto;
  margin-bottom: 0;
`

const FooterColumnContainer = styled(Container)`
  justify-content: space-between;
  margin-top: 50px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: ${props => props.theme.color.white.lessdark};
  @media (max-width: ${props => props.theme.screen.xs}) {
    justify-content: space-between;
  }
`

const FooterColumn = styled.div`
  max-width: 250px;
  span {
    font-size: 17px;
    ${props => props.theme.font.regular};
    color: ${props => props.theme.color.white.lessdark};
  }
  
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 47%;
    
    span {
      font-size: 15px;
    } 
  }
`

const Link = styled.a`
  ${props => props.theme.font.primary};
  color: ${props => props.theme.color.white.lessdark};
  text-decoration: none;
`

const ImageWrapper = styled.div`
  margin-bottom: 27px;
`

const StyledImage = styled.img`
  width: 250px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 220px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 100%;
  }
`

const SocialList = styled.ul`
  width: 150px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 30px 0;
  padding: 0;
  color: ${props => props.theme.color.white.regular};
  li {
      margin-bottom: 12px;
      ${props => props.theme.font.normal};
      font-size: 15px;
  }
  @media (max-width: ${props => props.theme.screen.xs}) {
    width: 120px;
    
  }
`

const TalTechSpan = styled.span`
  line-height: 30px;
`

const ContactColumn = styled.div`
  width: 192px;
  span {
    font-size: 26px;
    ${props => props.theme.font.normal};
    color: ${props => props.theme.color.white.regular};
  }
  div {
    display: flex;
    width: 100%;
    margin: 20px 0;
    justify-content: space-between;
    span {
      width: 145px;
      font-size: 16px;
      ${props => props.theme.font.primary};
      color: ${props => props.theme.color.white.lessdark};
    }
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    width: auto; 
    div {
      span {
        font-size: 15px;
        padding-left: 10px;
        line-height: 23px;
      }
    } 
    span {
      font-size: 20px;
    }
  }
`

const ContactImage = styled.img`
  width: 25px;
  @media (max-width: ${props => props.theme.screen.xs}) { 
    width: 23px;    
  }
`

export default Footer
