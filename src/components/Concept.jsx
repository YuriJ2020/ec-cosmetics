import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

import ReactPlayer from "react-player";

import styled from "styled-components";
import ConceptPNG from "assets/concept.png";

const H5 = styled.h5`
  @media (min-width: 576px) {
    line-height: 2.4rem;
  }
`;

const Concept = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer className="py-5">
          <MDBRow className="d-flex align-items-center">
            <MDBCol lg="6">
              <h2 className="h1-responsive font-weight-bold pb-2">
                Our Concept
              </h2>

              <H5>
                Vitamin C is essential for enhancing the skin’s resilience.
                Suited to use both morning and evening, this potent ingredient
                offers significant benefits when paired with time and
                dedication. Vitamin C is essential for enhancing the skin’s
                resilience. Suited to use both morning and evening, this potent
                ingredient offers significant benefits when paired with time and
                dedication.
              </H5>
            </MDBCol>
            <MDBCol lg="6">
              <ReactPlayer
                className="react-player"
                url="../videos/hand-cream.mp4"
                width="100%"
                height="100%"
                controls={false}
                muted={true}
                playing={true}
                loop={true}
              />

              {/* <img src={ConceptPNG} className="img-fluid" alt="" /> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default Concept;
