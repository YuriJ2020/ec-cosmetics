import React from "react";

import styled from "styled-components";
import AboutJPG from "assets/bg-about.png";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

const MDBContainerS = styled(MDBContainer)`
  background-image: url(${AboutJPG});
  min-height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const DivS = styled.div`
  border-radius: 50px;
  background: #eae8eb;
  box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
`;

const H5 = styled.h5`
  @media (max-width: 576px) {
    font-size: 1rem;
  }
  @media (min-width: 768px) {
    line-height: 2.2rem;
  }
`;

const MDBRowS = styled(MDBRow)`
  @media (min-width: 768px) {
    margin: 4rem;
  }
`;

const About = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        // initiallyVisible={true}
        animateOnce={true}
      >
        <MDBContainerS fluid className="d-flex align-items-center">
          <MDBRowS>
            <MDBCol xl="6" lg="12" className="mx-4">
              <DivS className="border p-5">
                <h2 className="h1-responsive py-3">About Us</h2>

                <H5
                  className="text-justify"
                  // style={{ lineHeight: "2rem" }}
                >
                  Vitamin C is essential for enhancing the skin’s resilience.
                  Suited to use both morning and evening, this potent ingredient
                  offers significant benefits when paired with time and
                  dedication. Vitamin C is essential for enhancing the skin’s
                  resilience. Suited to use both morning and evening, this
                  potent ingredient offers significant benefits when paired with
                  time and dedication. Suited to use both morning and evening,
                  this potent ingredient offers significant benefits when paired
                  with time and dedication. Suited significant benefits when
                  paired with time and dedication.
                </H5>
                <p className="lead"></p>
              </DivS>
            </MDBCol>
          </MDBRowS>
        </MDBContainerS>
      </ScrollAnimation>
    </>
  );
};

export default About;
