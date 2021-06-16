import _ from "lodash";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBMask,
  MDBView,
} from "mdbreact";
import React, { useState } from "react";
import styled from "styled-components";

import { addContact, getContact } from "../services/contact";

import Title5PNG from "assets/bg-title5.png";

const MDBBtnS = styled(MDBBtn)`
  color: #607d8b;
  background-color: white;
  border: 2px solid #607d8b;
  &:hover {
    color: white;
    background-color: #607d8b;
    border: 2px solid #607d8b;
  }
`;

const Contact = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [submissionMsg, setSubmissionMsg] = useState("");
  const [isAgreed, setIsAgreed] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    e.target.className += " was-validated";
    if (
      !_.isUndefined(fname) &&
      !_.isEmpty(fname) &&
      !_.isUndefined(lname) &&
      !_.isEmpty(lname) &&
      !_.isUndefined(email) &&
      !_.isEmpty(email) &&
      isAgreed
    ) {
      addContact({
        fname,
        lname,
        email,
        isAgreed,
      });
      console.debug("Contact:", getContact());
      setSubmissionMsg("Your inqury has successfully sent.");
    }
  };

  return (
    <>
      <MDBContainer className="p-0" fluid>
        <MDBView>
          <img src={Title5PNG} className="img-fluid" alt="" />
          <MDBMask className="flex-center" overlay="black-light">
            <h1 className="font-weight-bold text-white">CONTACT</h1>
          </MDBMask>
        </MDBView>
        <MDBContainer>
          <form
            className="needs-validation m-5"
            onSubmit={submitHandler}
            noValidate
          >
            <h4 className="py-3">
              Our office is open from Monday - Friday 9am-5pm AEST.
            </h4>

            <p className="py-3">
              Please allow 1-2 business days to receive a response.
            </p>
            <MDBRow>
              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterFirstNameEx"
                  className="font-weight-bold"
                >
                  First name
                </label>

                <input
                  required
                  className="form-control"
                  id="defaultFormRegisterFirstNameEx"
                  name="fname"
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Jane"
                  type="text"
                  value={fname}
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please fill in your first name.
                </div>
              </MDBCol>

              <MDBCol md="6" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterLastNameEx2"
                  className="font-weight-bold"
                >
                  Last name
                </label>
                <input
                  required
                  className="form-control"
                  id="defaultFormRegisterLastNameEx2"
                  name="lname"
                  onChange={(e) => setLname(e.target.value)}
                  placeholder="Doe"
                  type="text"
                  value={lname}
                />
                <div className="valid-feedback">Looks good!</div>
                <div className="invalid-feedback">
                  Please fill in your last name.
                </div>
              </MDBCol>

              <MDBCol md="12" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterEmailEx3"
                  className="font-weight-bold"
                >
                  Email
                </label>
                <input
                  required
                  className="form-control"
                  id="defaultFormRegisterEmailEx3"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="janedoe@doe.com"
                  type="email"
                  value={email}
                />
                <div className="invalid-feedback">
                  Please fill in your email address.
                </div>
              </MDBCol>

              <MDBCol md="12" className="mb-3">
                <div class="form-group">
                  <label
                    for="exampleFormControlTextarea1"
                    className="font-weight-bold"
                  >
                    Message
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="4"
                  ></textarea>
                </div>
              </MDBCol>
            </MDBRow>

            <MDBCol md="12" className="mb-3">
              <div className="custom-control custom-checkbox pl-3">
                <input
                  required
                  checked={isAgreed}
                  className="custom-control-input"
                  id="invalidCheck"
                  onChange={() => setIsAgreed(!isAgreed)}
                  type="checkbox"
                />
                <label className="custom-control-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </MDBCol>

            <div className="py-3">
              <MDBBtnS type="submit" color="">
                Send
                <MDBIcon far icon="paper-plane" className="ml-1" />
              </MDBBtnS>
              <h3 className="py-3 orange-text">{submissionMsg}</h3>
            </div>
          </form>
        </MDBContainer>
      </MDBContainer>
    </>
  );
};

export default Contact;
