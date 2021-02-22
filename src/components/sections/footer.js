import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
//import { Container } from "../global"
import {graphql, useStaticQuery} from "gatsby";
import { Link } from 'gatsby'

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      image1: file(sourceInstanceName: { eq: "svg" }, name: { eq: "ituktaltechlogo" }) {
        publicURL
      },
      image2: file(sourceInstanceName: { eq: "svg" }, name: { eq: "facebook" }) {
        publicURL
      },
      image3: file(sourceInstanceName: { eq: "svg" }, name: { eq: "instagram" }) {
        publicURL
      },
      image4: file(sourceInstanceName: { eq: "svg" }, name: { eq: "ituk" }) {
        publicURL
      },
      image5: file(sourceInstanceName: { eq: "svg" }, name: { eq: "geo-alt-fill" }) {
        publicURL
      },
      image6: file(sourceInstanceName: { eq: "svg" }, name: { eq: "envelope" }) {
        publicURL
      }
    }
  `);



  return (
  <FooterWrapper id="footer">
    <FooterColumnContainer >

      <Row>
        <FooterCol >
          <SchoolLogoImage src={data.image1.publicURL} width="330" margin="auto"/>
        </FooterCol>

        <FooterCol>
          <ContactColumn>
            <div>
              <img src={data.image6.publicURL} alt="mail svg"/>
              <span><Link href="mailto:kontakt@ituk.ee"><span>kontakt@ituk.ee</span></Link></span>
            </div>
            <br/>
            <div>
              <img src={data.image5.publicURL} alt="geo svg"/>
              <span>Akadeemia tee 15a, ICT-361</span>
            </div>
          </ContactColumn>
        </FooterCol>

        <FooterCol>
          <SocialList>
            <a href="https://www.facebook.com/ituk.taltech" target="_blank" rel="noreferrer">
              <Image src={data.image2.publicURL} alt="facebook svg"/>
            </a>
            <a href="https://www.instagram.com/ituk.taltech/" target="_blank" rel="noreferrer">
              <Image src={data.image3.publicURL} alt="instagram svg"/>
            </a>
            <a href="https://ituk.ee/" target="_blank" rel="noreferrer">
              <Image src={data.image4.publicURL} alt="ituk svg"/>
            </a>
          </SocialList>
          
        </FooterCol>
      </Row>

    </FooterColumnContainer>
    <Copyright>
      © {new Date().getFullYear()} ITÜK. All rights reserved.
    </Copyright>
  </FooterWrapper>
  )
}


const SchoolLogoImage = styled.img`
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`

const Image = styled.img`
width: 40;
`

const FooterCol = styled(Col)`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 25px;
  margin-left: auto;
  margin-right: auto;
`

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  margin: 80px 0 0;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
  border-top: 5px solid;
  border-image: linear-gradient(to right, ${props => props.theme.color.secondary}, ${props => props.theme.color.tertiary} ) 1;
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

const SocialList = styled.ul`
  width: 150px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: auto;
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

const ContactColumn = styled.div`
  width: 250px;
  margin: auto;
  span {
    font-size: 26px;
    color: ${props => props.theme.color.white.regular};
  }
  div {
    display: flex;
    width: 100%;
    margin: auto;
    justify-content: space-between;
    span {
      width: 200px;
      font-size: 20px;
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

export default Footer
