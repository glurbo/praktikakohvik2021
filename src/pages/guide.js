import * as React from "react"
import Layout from "../components/common/layout/layout"
import Form from "../components/sections/form"
import Footer from "../components/sections/footer"
import Navigation from "../components/common/navigation/navigation"
import styled from "styled-components"
import Guide from "../components/sections/guide"

const FormPage = () => (
  <Layout>
    <Navigation/>
    <Guide/>
    <Footer/>
    
  </Layout>
)


export default FormPage