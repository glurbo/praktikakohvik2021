import * as React from "react"
import Layout from "../components/common/layout/layout"
import Header from "../components/sections/header"
import Footer from "../components/sections/footer"
import About from "../components/sections/about"
import Companies from "../components/sections/companies"
import Questions from "../components/sections/questions"
import Navigation from "../components/common/navigation/navigation"
import SEO from "../components/common/layout/seo"


const IndexPage = () => (
  <Layout>
    <SEO/>
    <Navigation/>
    <Header />
    <About />
    
    <Footer/>
  </Layout>
  
)

export default IndexPage
