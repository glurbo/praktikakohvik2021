import React from "react"
import styled from "styled-components"

import { Section, Container } from "../global"

const Questions = () => (
  <Section id="küsimused">
    <Container>
      <div>MÕISTLIK KÜSIDA</div>
      <div>Mida küsida?</div>
      <SubText>Enne üritusele tulemist on mõistlik ette valmistada mõned küsimused <br />
        tööandjatele. Siin on mõned näited.</SubText>

      <List>
        <li>Mis oskusi on vaja, et mingile kohale kandideerida?</li>
        <li>Milliseid tehnoloogiad firmas kasutatakse?</li>
        <li>Mida oodata palga suhtes?</li>
        <li>Milline näeb välja kontori igapäev?</li>
        <li>Milline on töökoormus?</li>
        <li>Kui paindlik on tudengina tööl käimise juures graafik või koormus?</li>
        <li>Mis on ettevõttes arenemisvõimalused? Kas pakutakse mingeid lisakoolitusi?</li>
      </List>
    </Container>
  </Section>
)

export default Questions

const List = styled.ul`
  margin: 20px auto;
  li {
    ${props => props.theme.font_size.small};
    color: ${props => props.theme.color.tertiary};
    margin: 16px auto;
  }
`

const SubText = styled.p`
  text-align: center;
  color: ${props => props.theme.color.tertiary};
`
