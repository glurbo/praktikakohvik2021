import React from "react"
import styled from "styled-components"
import { Container, Section} from "../global"


const Guide = () => {
    return (
        <Section>
            <Container>
                <Flex>
                    <div>
                        a
                    </div>
                    <div>       
                        as
                    </div>
                </Flex>
            </Container>
        </Section>
    )
}

export default Guide

const Flex = styled.div`
display: grid;
justify-content: space-between;
align-content: center;
grid-template-columns: 1fr 1fr;
@media (max-width: ${props => props.theme.screen.md}) {
  grid-template-columns: 1fr;
}
`