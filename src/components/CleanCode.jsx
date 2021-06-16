import React from "react";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import ScrollAnimation from "react-animate-on-scroll";

import IconVSVG from "assets/icon-v.svg";
import IconCSVG from "assets/icon-c.svg";
import IconOSVG from "assets/icon-o.svg";
import IconGSVG from "assets/icon-g.svg";

const ImgS = styled.img`
  @media (min-width: 996px) {
    width: 34%;
  }
  @media (max-width: 996px) {
    width: 50%;
  }
`;

const PS = styled.p`
  white-space: pre-wrap;
  @media (min-width: 1200px) {
    margin: 2rem 20rem;
  }
  @media (max-width: 1200px) {
    margin: 1rem 3rem;
  }
`;

const MDBRowS = styled(MDBRow)`
  @media (min-width: 768px) {
    padding: 0 10rem;
  }
  // @media (max-width: 768px) {
  //   padding: 0;
  //   margin: 0;
  // }
`;

const CleanCode = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        // initiallyVisible={true}
        animateOnce={true}
      >
        <MDBContainer
          className="text-center py-5"
          style={{ backgroundColor: "	#eae8eb" }}
          fluid
        >
          <h5>Our Promise</h5>

          <h2 className="h2-responsive my-4 font-weight-bold">
            GRADE'S CLEAN CODE
          </h2>

          <PS>
            We are so much more than “clean beauty” – we’re Certified Organic.
            Our products are toxin-free, cruelty-free and formulated with
            highly-active Certified Organic ingredients that deliver powerful
            results, leaving your skin healthy, glowing and radiant.
          </PS>
          <MDBRowS className="">
            <MDBCol>
              <ImgS src={IconVSVG} className="img-fluid" alt="" />
              <h5 className="py-4 font-weight-bold">VEGAN</h5>
            </MDBCol>

            <MDBCol>
              <ImgS src={IconCSVG} className="img-fluid" alt="" />
              <h5 className="py-4 font-weight-bold">CRUELTY FREE</h5>
            </MDBCol>
            <MDBCol>
              <ImgS src={IconOSVG} className="img-fluid" alt="" />
              <h5 className="py-4 font-weight-bold">100% ORGANIC</h5>
            </MDBCol>
            <MDBCol>
              <ImgS src={IconGSVG} className="img-fluid" alt="" />
              <h5 className="py-4 font-weight-bold">GMO FREE</h5>
            </MDBCol>
          </MDBRowS>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default CleanCode;
