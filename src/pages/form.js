import * as React from "react"
import Layout from "../components/common/layout/layout"
import FormSection from "../components/sections/form"
import Footer from "../components/sections/footer"
import Navigation from "../components/common/navigation/navigation"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"

const FormPage = () => (
  
  <Layout>
    <Navigation/>
    <FormSection/>
    <Footer/>
  </Layout>
  
)

export default FormPage