import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import styled from "styled-components";
import ConceptPNG from "assets/concept.png";

const Concept = () => {
  return (
    <>
      <MDBContainer className="py-5">
        <MDBRow className="d-flex align-items-center">
          <MDBCol lg="6">
            <h2 className="h1-responsive font-weight-bold pb-2">Our Concept</h2>
            <h5 style={{ lineHeight: "2.4rem" }}>
              Vitamin C is essential for enhancing the skin’s resilience. Suited
              to use both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication. Vitamin
              C is essential for enhancing the skin’s resilience. Suited to use
              both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication.
            </h5>
          </MDBCol>
          <MDBCol lg="6">
            <img src={ConceptPNG} className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Concept;
