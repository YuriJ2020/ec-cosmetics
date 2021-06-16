import React, { useState } from "react";

import request from "request";

// import Slider from "react-slick";

import { Parallax } from "react-parallax";

import styled from "styled-components";

import ScrollAnimation from "react-animate-on-scroll";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
} from "mdbreact";

// import art1PNG from "assets/art-1.png";
// import art2PNG from "assets/art-2.png";
// import art3PNG from "assets/art-3.png";

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

  // const simpleSlider = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true,
  //       },
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };
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
            <h2 className="py-3 font-weight-bold">Stay in the Loop!</h2>
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

            {/* Slider */}
            {/* <Slider {...simpleSlider} className="m-5">
            <div>
              <Link to="/">
                <MDBCardImage src={art1PNG} alt="" className="mx-auto p-2" />
              </Link>
            </div>
            <div>
              <Link to="/">
                <MDBCardImage
                  src={art2PNG}
                  alt=""
                  className="mx-auto p-2"
                  waves
                />
              </Link>
            </div>
            <div>
              <Link to="/">
                <MDBCardImage
                  src={art3PNG}
                  alt=""
                  className="mx-auto p-2"
                  waves
                />
              </Link>
            </div>
            <div>
              <Link to="/">
                <MDBCardImage
                  src={art1PNG}
                  alt=""
                  className="mx-auto p-2"
                  waves
                />
              </Link>
            </div>
            <div>
              <Link to="/">
                <MDBCardImage
                  src={art2PNG}
                  alt=""
                  className="mx-auto p-2"
                  waves
                />
              </Link>
            </div>
          </Slider> */}

            {/* Modal */}
            <MDBModal isOpen={modal} toggle={() => setModal(!modal)} centered>
              <MDBModalHeader toggle={() => setModal(!modal)}>
                MDBModal title
              </MDBModalHeader>
              <MDBModalBody></MDBModalBody>
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
