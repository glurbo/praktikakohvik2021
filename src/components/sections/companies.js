import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby";

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