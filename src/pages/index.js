import * as React from "react"
import Layout from "../components/common/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"

import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"


const IndexPage = () => (
  <Layout>
    <SEO/>
    <Navigation/>
    <Header/>
    <Footer/>
  </Layout>
  
)

export default IndexPage
