import React, { useCallback, useState }  from "react"
import { Container } from "../global"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReCAPTCHA from "react-google-recaptcha"
import styled from "styled-components"
import axios from "axios";
import FormImage from "../../images/svg/form.svg"
import { FormattedMessage } from "gatsby-plugin-intl"

let recaptchaInstance;

const MyForm = () => {

  const [disableSubmit,setDisableSubmit] = useState(true);

  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
      recaptchaInstance.reset();
      setDisableSubmit(true)
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/a9eb4c50-67cf-487b-9090-331e52dce56e",
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Täname registreerimast!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

    return (
      <FormWrapper>
        <Container>
          <Flex>
            <FormBox>
              <div className="col-md-12 mt-5">
                <form onSubmit={handleOnSubmit}>
                  <div className="form-group">
                    <Label for="InputName"><FormattedMessage id="form.name"/></Label>
                    <input type="text" name="Nimi" className="form-control" id="InputName" placeholder="" required="required"/>
                  </div>
                  <div className="form-group">
                    <Label for="InputEmail" required="required"><FormattedMessage id="form.email"/></Label>
                    <input type="email" name="Email" className="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="" required="required"/>
                  </div> 
                  <div className="form-group">
                    <ReCAPTCHA 
                      ref={e => recaptchaInstance = e}
                      name="Recaptcha"
                      sitekey="6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7" 
                      onChange={useCallback(() => setDisableSubmit(false))}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-lg btn-primary" style={{ backgroundColor: props => props.theme.color.secondary }}  disabled={disableSubmit}>
                    <FormattedMessage id="form.button"/>
                  </button >
                  
                </form>
              </div>
            </FormBox>
            <ImageWrapper>
              <StyledImage src={FormImage}/>
            </ImageWrapper>
          </Flex>
          {serverState.status && (
                    <Success className={!serverState.status.ok ? "errorMsg" : ""}>
                      <FormattedMessage id="form.success"/>
                    </Success>
                  )}
            
        </Container>

      </FormWrapper>
     
    );
  };
  
  export default MyForm;


const Label = styled.label`
  color: ${props => props.theme.color.white.regular};
  font-size: 20px;
  font-weight: 500;
`

const FormBox = styled.div`
  @media (min-width: ${props => props.theme.screen.md}) {
    justify-self: end;
  }
  

`

const StyledImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  }
`

const FormWrapper = styled.section`
  padding: 160px 0 80px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

  const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 47% 47%;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
  }
`

  const Success = styled.div`
  font-weight: bold;
  color: #488f5b;
  background: #E1F8ED;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  `
  const ImageWrapper = styled.div`
  justify-self: center;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
    display: none;
  }
`
