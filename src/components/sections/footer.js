import React from "react"
import styled from "styled-components"

const Footer = () => {
    return (
        <FooterWrapper>

        </FooterWrapper>

    )
}

export default Footer


const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.tertiary};
  margin: 80px 0 0;
  padding: 0 0 20px;
  display: flex;
  flex-direction: column;
`