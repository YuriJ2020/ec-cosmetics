import React, { useState } from "react";

import request from "request";

import { Parallax } from "react-parallax";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

import BgMailPNG from "assets/bg-mail.png";

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

const MailList = () => {
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState(false);

  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        // initiallyVisible={true}
        animateOnce={true}
      >
        <Parallax
          blur={0}
          bgImage={BgMailPNG}
          bgImageAlt="powder"
          strength={240}
          style={{ backgroundPosition: "center" }}
        >
          <MDBContainer className="text-center py-5">
            {/* Sign Form */}
            <h2 className="py-3 font-weight-bold">STAY IN THE LOOP!</h2>
            <h4 className="py-2">Join & Recieve member's benefits.</h4>
            <div>
              <p className="m-0">
                Get a new information about product releases Receive Special
              </p>
              <p>Get promotions including gift with purchase</p>
            </div>
            <div className="d-flex justify-content-center">
              <form>
                <input
                  size="50"
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control my-3"
                  placeholder="Enter email"
                  value={email}
                  onChange={(e) => {
                    const val = e.currentTarget.value;
                    console.log("val:", val);
                    setEmail(val);
                  }}
                />
              </form>
            </div>
            <div className="py-3">
              <MDBBtnS
                size="lg"
                color=""
                disabled={email.length === 0}
                onClick={(e) => {
                  const postData = JSON.stringify({ email });
                  const options = {
                    url: "http://localhost:5000/signup",
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: postData,
                  };
                  request(options, (err, response, body) => {
                    console.log("error:", err);
                    console.log("body:", body);
                  });
                  setEmail("");
                  setModal(true);
                }}
              >
                Send
              </MDBBtnS>
            </div>

            {/* Modal */}
            <MDBModal isOpen={modal} toggle={() => setModal(!modal)} centered>
              <MDBModalHeader toggle={() => setModal(!modal)}>
                Signup Sucess
              </MDBModalHeader>
              <MDBModalBody>
                <div>Thank you for your Sign Up!</div>
              </MDBModalBody>
              <MDBModalFooter>
                <MDBBtn color="secondary" onClick={() => setModal(!modal)}>
                  Close
                </MDBBtn>
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        </Parallax>
      </ScrollAnimation>
    </>
  );
};

export default MailList;
