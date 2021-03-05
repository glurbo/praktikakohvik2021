import React, { Component } from "react"
import Scrollspy from "react-scrollspy"
import { Menu, X } from "react-feather"
import { Container } from "../../global"
import { FormattedMessage, useIntl, Link } from "gatsby-plugin-intl"
//import { Link } from 'gatsby'
import Language from "../../language"
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
  Title,
  MobileButton,
  MobileMenuItem,
  HeaderButtonText,
  activeStyles
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
    <Link 
      to={`/${item.toLowerCase()}/`} 
      onClick={this.closeMobileMenu}
    >
      <MobileMenuItem>{item.replace("_", " ")}</MobileMenuItem>
      
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
                      <FormattedMessage id="navigation.title"/>
                      <br/>
                      2021
                    </Title>
                  </Link>
                </Brand>


                <Mobile>
                  <MobileButton
                    onClick={this.toggleMobileMenu}
                  >
                    {this.state.mobileMenuOpen ? (
                      <X size={24} alt="close menu" />
                    ) : (
                      <Menu size={24} alt="open menu" />
                    )}
                  </MobileButton>
                </Mobile>
            
                <ActionsContainer>
                  <Link to="/registreerimine/" activeStyle={activeStyles} >
                    <HeaderButton ><HeaderButtonText><FormattedMessage id="navigation.registration"/></HeaderButtonText></HeaderButton>
                  </Link>
                </ActionsContainer>
                <ActionsContainer>
                  <Link to="/discordi_juhend/" activeStyle={activeStyles} >
                    <HeaderButton ><HeaderButtonText><FormattedMessage id="navigation.guide"/></HeaderButtonText></HeaderButton>
                  </Link>
                </ActionsContainer>
                
                <Language/>
                

                    
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
