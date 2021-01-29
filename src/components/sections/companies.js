import React from "react"
import styled from "styled-components"


const Companies = () => {

    const data = useStaticQuery(graphql`
    query {
      allCompaniesJson {
        edges {
          node {
            company {
              name
              about
              image
            }
          }
        }
      }
    }

    `)



}

export default Companies