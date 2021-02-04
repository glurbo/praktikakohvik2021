import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => {

  return (
  <FooterWrapper id="footer">
    <FooterColumnContainer>

      <FooterColumn>

        <ImageWrapper>
          
        </ImageWrapper>

        <Link href="https://www.ttu.ee/asutused/itcollege/" target="_blank"><TalTechSpan>TalTech IT Kolledž</TalTechSpan></Link> <br />
        <Link href="https://www.ttu.ee/teaduskond/infotehnoloogia-teaduskond/" target="_blank"><TalTechSpan>TalTech IT-teaduskond</TalTechSpan></Link>
        <SocialList>
          <li>
            <a href="https://www.facebook.com/ituk.ttu/" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/ituk.taltech/" target="_blank" rel="noopener noreferrer">
            </a>
          </li>
          <li>
            <a href="https://ituk.ee/" target="_blank" rel="noopener noreferrer">
              
            </a>
          </li>
        </SocialList>
      </FooterColumn>

      <ContactColumn>
        <span>Kontaktid</span>
        <div>
          <span>Mektory <br/> Raja 15, Tallinn</span>
        </div>
        <div>
          <span><Link href="mailto:kontakt@ituk.ee">kontakt@ituk.ee</Link></span>
        </div>
        <div>
          <span>5331 1997</span>
        </div>
      </ContactColumn>

    </FooterColumnContainer>
    <Copyright>
      © 2020 ITÜK. All rights reserved.
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
  display: flex;
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

const SocialImage = styled.img`
  width: 29px;
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
