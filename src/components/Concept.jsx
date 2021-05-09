import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

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
      <MDBContainer className="py-5">
        <MDBRow className="d-flex align-items-center">
          <MDBCol lg="6">
            <h2 className="h1-responsive font-weight-bold pb-2">Our Concept</h2>
            <H5>
              Vitamin C is essential for enhancing the skin’s resilience. Suited
              to use both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication. Vitamin
              C is essential for enhancing the skin’s resilience. Suited to use
              both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication.
            </H5>
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
