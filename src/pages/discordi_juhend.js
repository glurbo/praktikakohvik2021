import * as React from "react"
import Layout from "../components/common/layout/layout"
import Guide from "../components/sections/guide"
import Footer from "../components/sections/footer"
import Navigation from "../components/common/navigation/navigation"
import styled from "styled-components"
import Questions from "../components/sections/questions"

const FormPage = () => (
  <Layout>
    <Navigation/>
    <Guide/>
    <Footer/>
    
  </Layout>
)


export default FormPage