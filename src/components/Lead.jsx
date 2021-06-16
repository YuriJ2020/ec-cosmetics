import { Link } from "react-router-dom";
import React from "react";

import styled from "styled-components";
import { MDBContainer, MDBBtn } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

import lipPNG from "assets/bg-1.png";

const MDBContainerS = styled(MDBContainer)`
  background-image: url(${lipPNG});
  min-height: 360px;
  background-repeat: no-repeat;
  background-position: left;
  background-size: cover;
  text-align: center;
  position: relative;
`;

const H5 = styled.h5`
  white-space: pre-line;
  @media (min-width: 1200px) {
    padding: 0 20rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    padding: 0 10rem;
  }
  @media (max-width: 768px) {
    padding: 0 3rem;
    background-color: rgba(255, 255, 255, 0.6);
  }
`;

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

const Lead = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <MDBContainerS fluid>
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: " translateY(-50%)",
          }}
        >
          <h2 className="font-weight-bold pt-4"> - About Grade Organics - </h2>
          <H5 className="pt-3">
            Vitamin C is essential for enhancing the skin’s resilience. Suited
            to use both morning and evening, this potent ingredient offers
            significant benefits when paired with time and dedication. Vitamin C
            is essential for enhancing the skin’s resilience. Suited to use both
            morning and evening, this potent ingredient offers significant
            benefits when paired with time and dedication.
          </H5>
          <div className="py-3">
            <Link to="/about">
              <MDBBtnS color="">GO TO ABOUT PAGE</MDBBtnS>
            </Link>
          </div>
        </div>
      </MDBContainerS>
    </ScrollAnimation>
  );
};

export default Lead;
