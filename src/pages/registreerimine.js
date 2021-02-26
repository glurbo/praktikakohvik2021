import * as React from "react"
import Layout from "../components/common/layout/layout"
import Form from "../components/sections/form"
import Footer from "../components/sections/footer"
import Navigation from "../components/common/navigation/navigation"
import SEO from "../components/common/layout/seo"

const FormPage = () => (
  <Layout>
    <SEO/>
    <Navigation/>
    <Form/>
    <Footer/>
    
  </Layout>
)


export default FormPage