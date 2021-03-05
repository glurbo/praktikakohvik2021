import React from "react"
import styled from "styled-components"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { Section, Container } from "../global"
import { graphql, useStaticQuery } from "gatsby";
import { FormattedMessage, useIntl } from "gatsby-plugin-intl"

const Companies = () => {

    const data = useStaticQuery(graphql`
    query {
      allCompaniesJson {
        edges {
          node {
            company {
              name
              about
            }
          }
        }
      }
    }

    `)

    const items = [];
    //generate array of company names from graphql query
    data.allCompaniesJson.edges.forEach(item =>
        items.push(
            <AnchorLink href="#info" key={item.node.company.name} offset="112">
            <Button value={item.node.company.name}
            onClick={e => changeCompanyInfo(e.target.value)} >
            {item.node.company.name}
            </Button>
            </AnchorLink>
        )
    );

    let companyData = {};
    //creates an object of objects that contain the company information
    async function getCompanyData() {
        return new Promise((resolve, reject) => {
            try {
                resolve(
                    data.allCompaniesJson.edges.forEach(item =>
                        companyData[item.node.company.name] = [item.node.company.about, item.node.company.image]
                    )
                );
            } catch (err) {
                console.log('Error parsing JSON string:', err)
            }
        })
    }

    getCompanyData();

    function changeCompanyInfo(somename) {
        nameRef.current.innerHTML = somename;
        aboutRef.current.innerHTML = companyData[somename][0];
    }


    const nameRef = React.createRef();
    const aboutRef = React.createRef();

    return (
      <Section id="firmad">
        <Container>
          <Title><FormattedMessage id="companies.title"/></Title>
          <Flex>
            <ContainerItem>
                {items}
            </ContainerItem>
            
            <br />
            <ContainerItem id="info">
              <span ref={ nameRef }></span>
              <div ref={ aboutRef }></div>
            </ContainerItem>
          </Flex>
        </Container>
      </Section>
    )
}

export default Companies

const Div = styled.div`
  margin: auto;
  padding-top: 20px;
  font-weight: 400;
`

const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
`

const ContainerItem = styled.section`
  display: flex;
  width: 48%;
  flex-wrap: wrap;
  align-items: flex-start;
  align-self: start;
  span {
    text-transform: uppercase;
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.larger};
    font-weight: 500;
    margin-bottom: 35px;
    @media (max-width: ${props => props.theme.screen.sm}) {
      margin-top: 35px;
    }
  }
  div {
    color: ${props => props.theme.color.white.regular};
    ${props => props.theme.font_size.small};
    line-height: 30px;
    font-size: 20px;
    font-weight: 400;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 100%;
    justify-content: center;
  }
`

const Button = styled.button`
  color: ${props => props.theme.color.white.regular};
  line-height: 30px;
  letter-spacing: 1px;
  margin: 10px 10px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.background.white};
  padding: 5px 20px;
  border-radius: 25px;
  outline: 0px;
  transition: 0.15s;
  background-color: ${props => props.theme.color.secondary};
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
    background-color: ${props => props.theme.color.tertiary};
  }
  &:onClick {
    background-color: ${props => props.theme.color.tertiary};
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    justify-content: center;
  }
`
