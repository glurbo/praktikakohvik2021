import React, { useCallback, useState }  from "react"
import axios from "axios"
import styled from "styled-components"
import { Form } from "react-bootstrap"


const FormSection = () => {
  

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
      }
    };

    const handleOnSubmit = e => {
      e.preventDefault();
      const form = e.target;
      setServerState({ submitting: true });
      axios({
        method: "POST",
        url: "https://getform.io/f/e92cda47-d128-4f1c-b7f0-a69e09fadd73",
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
        <Form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label for="name" required="required">Nimi</label>
            <br/>
            <input
              id="name"
              type="text"
              name="Nimi"
              className="form-control"
            />
          </div>
          
          <div className="form-group">
          <label for="emailAddress" required="required">Email</label>
            <br/>
            <input
              id="emailAddress"
              type="email"
              name="Email"
              className="form-control" 
              aria-describedby="emailHelp"
            />
          </div>

          <div class="g-recaptcha" data-sitekey="6Lda10UaAAAAAO6CbkZsichV5pPiDwxjDY58ZHE7" onChange={useCallback(() => setDisableSubmit(false))}></div>

          <button type="submit" disabled={serverState.submitting && disableSubmit}>Submit</button>
          {serverState.status && (
                  <p className={!serverState.status.ok ? "errorMsg" : ""}>
                  {serverState.status.msg}
                  </p>
              )}
          
        </Form>
  );
};

export default FormSection;



const FormWrapper = styled.div``

const Success = styled.div`
  display: none;
  background: #E1F8ED;
  padding: 20px;
  margin-top: 16px;
  margin-bottom: 16px;
  &.is-active {
    display: block;
  }`

