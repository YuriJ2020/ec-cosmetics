import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import styled from "styled-components";
import BestPNG from "assets/best.png";

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
            <img src={BestPNG} className="img-fluid" alt="" />
          </MDBCol>
          <MDBCol lg="6">
            <h2 className="h1-responsive py-2 font-weight-bold">
              Best Product
            </h2>
            <H5>
              Vitamin C is essential for enhancing the skin’s resilience. Suited
              to use both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication. Vitamin
              C is essential for enhancing the skin’s resilience.
            </H5>
            <Link to="/allitems">
              <MDBBtnS color="">Check the Items</MDBBtnS>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Concept;
