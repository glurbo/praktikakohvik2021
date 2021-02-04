import React, { useCallback, useState }  from "react"
import styled from "styled-components"
import { Form, Button, Row, Col } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css'
import ReCAPTCHA from "react-google-recaptcha"
import * as Yup from 'yup';
import { Container, Section} from "../global"

const FormSection = () => {
  
  const [disableSubmit,setDisableSubmit] = useState(true);

  return (
    <Section id="form">
      <Container>
        <Row>
          <Col md={6}>
            <Form validationSchema={Yup.object().shape({
                    Nimi: Yup.string().required('Full name field is required'),
                    Email: Yup.string()
                      .email('Invalid email')
                      .required('Email field is required'),
                    Recaptcha: Yup.string().required('Robots are not welcome yet!'),
                  })}
                  method="POST" 
                  action="https://getform.io/f/e92cda47-d128-4f1c-b7f0-a69e09fadd73">
              <Form.Group controlId="formBasicName">
                <Form.Label>Nimi</Form.Label>
                <Form.Control name="Nimi" required size="lg" type="text" placeholder="Sisesta nimi"/>
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="Email" required size="lg" type="email" placeholder="Sisesta email"/>
              </Form.Group>
              <ReCAPTCHA 
                name="Recaptcha"
                sitekey="6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7" 
                onChange={useCallback(() => setDisableSubmit(false))}
              />
              <Button type="submit" size="lg" disabled={disableSubmit}>Registreeri</Button>
            </Form>

          </Col>
        </Row>
        <Success>Täname registreerimast!</Success>
      </Container>
        
    </Section>
        
  );
};

export default FormSection;



const Success = styled.div`
  display: none;
  background: #E1F8ED;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  &.is-active {
    display: block;
  }`

