import React from "react"
import styled from "styled-components"
import { Container, TextGroup } from "../global"


const Guide = () => {
    return (
        <GuideWrapper>
            <Container>
                <Flex>
                    <TextGroup>
                    <Title>Helikanalid ja tekstikanalid</Title>
                        <p>Discordis on võimalik rääkida kahel viisil, helikanalites ja tekstikanalites. Tekstikanalid algavad <b>#-ga</b>. Tuleb tähele panna, et õige tekst jõuaks õigesse kanalisse! Helikanalite ees on kõlari ikoon, kui olete arvutis ja sellele vajutate, olete koheselt helikanalis ning valmis rääkima. Kui mingil põhjusel ei ole teid kuulda või helikvaliteet ei ole see, mis ta võiks olla, siis andke administraatoritele teada, proovime leida sellele probleemile lahenduse!</p>
                    </TextGroup>
                </Flex>
                <Flex>
                    <TextGroup>
                    <Title>Firmaga rääkimine</Title>
                        <p>Kui soovite rääkida firmade esindajatega, liituge vastava firma helikanaliga, mille nimes on <i>queue</i>. Firmade esindajad ise valivad mitu inimest saab nende helikanalis korraga viibida ning kui seal on vabu kohti, siis saab sellega liituda. Helikanaliga liitudes on eesõigus nendel, kes on kauem oodanud. Samuti ei soovita ühe firmaga liiga kaua rääkida, et ka teised huvilised saaksid võimaluse.</p>
                    </TextGroup>    
                </Flex>
                <Flex>
                    <TextGroup>
                    <Title>Küsimused ja probleemid</Title>
                        <p>Kui tekib probleeme või küsimusi, siis kirjutage #help tekstikanalisse ning Praktikakohviku moderaatorid on kohe valmis aitama.</p>        
                    </TextGroup>
                </Flex>
            
            </Container>
        </GuideWrapper>
    )
}

export default Guide

const GuideWrapper = styled.section`
  padding: 160px 0 80px 0;
  position: relative;
`

const Title = styled.h1`
  text-align: center;
`

const Flex = styled.div`
display: grid;
margin: 20px 0;
justify-content: space-between;
align-content: center;
grid-template-columns: 1fr 1fr;
@media (max-width: ${props => props.theme.screen.md}) {
  grid-template-columns: 1fr;
}
`