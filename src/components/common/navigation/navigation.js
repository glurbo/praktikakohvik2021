import React, { Component } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import styled from "styled-components"
import { Container } from "../../global"
import { Link } from 'gatsby'
import { Row, Col } from "react-bootstrap"
import {
  Nav,
  NavItem,
  Brand,
  StyledContainer,
  NavListWrapper,
  MobileMenu,
  Mobile,
  ActionsContainer,
  HeaderButton,
  Title
} from "./style"

const NAV_ITEMS = ["DISCORDI_JUHEND", "REGISTREERIMINE", ""]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavLink = item => (
    <Link to={`/${item.toLowerCase()}/`} onClick={this.closeMobileMenu}>
      {item.replace("_", " ")}
    </Link>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  )

  render() {
    const { mobileMenuOpen } = this.state

    return (
      <Nav {...this.props} scrolled={this.state.hasScrolled}>
        <StyledContainer>



                <Brand>
                  <Link to="/" onClick={this.closeMobileMenu}>
                    <Title>
                      PRAKTIKAKOHVIK 
                      <br />
                      2021
                    </Title>
                  </Link>
                </Brand>


                <Mobile>
                  <button
                    onClick={this.toggleMobileMenu}
                    style={{ color: "black", background: "none" }}
                  >
                    {this.state.mobileMenuOpen ? (
                      <X size={24} alt="close menu" />
                    ) : (
                      <Menu size={24} alt="open menu" />
                    )}
                  </button>
                </Mobile>
              
              
                <ActionsContainer>
                  <Link to="/discordi_juhend/" style={{textDecoration: 'none'}}>
                    <HeaderButton >Discordi juhend</HeaderButton>
                  </Link>
                </ActionsContainer>
                <ActionsContainer>
                  <Link to="/registreerimine/" style={{textDecoration: 'none'}}>
                    <HeaderButton >Registreerimine</HeaderButton>
                  </Link>
                </ActionsContainer>
                    

                    

                    
        </StyledContainer>

        <Mobile>
          {mobileMenuOpen && (
            <MobileMenu>
              <Container>{this.getNavList({ mobile: true })}</Container>
            </MobileMenu>
          )}
        </Mobile>
        
      </Nav>
    )
  }
}
