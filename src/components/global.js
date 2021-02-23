import styled from "styled-components"

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`

export const Section = styled.section`
  padding: 120px 0;
  overflow: hidden;
  background-color: ${props => props.theme.color.primary};

  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 80px 0;
  }

  ${props =>
    props.accent &&
    `background-color: ${
      props.accent === "secondary"
        ? props.theme.color.white.dark
        : props.theme.color.primary
    }`};
`

export const TextGroup = styled.div`
  border: 5px solid;
  border-radius: 25px;
  border-image: linear-gradient(to right, ${props => props.theme.color.secondary}, ${props => props.theme.color.tertiary} ) 1;
  border-image-slice: 2;
  &#headerGroup {
    border-image: linear-gradient(to top, ${props => props.theme.color.secondary}, ${props => props.theme.color.tertiary} ) 1;
  }

  padding: 15px;
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 13px;
    color: ${props => props.theme.color.white.regular};
    font-size: 45px;
    @media (max-width: ${props => props.theme.screen.sm}) {
      ${props => props.theme.font_size.larger};
    }
    line-height: 56px;
    letter-spacing: 2px;
    text-shadow:
       3px 3px 0 #000,
     -1px -1px 0 #000,  
      1px -1px 0 #000,
      -1px 1px 0 #000,
       1px 1px 0 #000;
  }

  h2 {
    color: ${props => props.theme.color.white.regular};
  }

  h4 {
    margin-bottom: 0px;
    font-size: 27px;
    ${props => props.theme.font.normal};
  }

  h5 {
    color: ${props => props.theme.color.secondary};
    margin-top: 4px;
    font-size: 19px;
    letter-spacing: 1px;
    ${props => props.theme.font.primary};
    margin-bottom: 45px;
  }

  p {
    margin: 20px 0;
    color: ${props => props.theme.color.white.regular};
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
  }
`
