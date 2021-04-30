import React from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import styled from "styled-components";
import BestPNG from "assets/best.png";

const MDBContainerS = styled(MDBContainer)``;

const Concept = () => {
  return (
    <>
      <MDBContainer className="py-5 blue-grey-text">
        <MDBRow className="d-flex align-items-center">
          <MDBCol lg="6">
            <img src={BestPNG} className="img-fluid" alt="" />
          </MDBCol>
          <MDBCol lg="6">
            <h2 className="h1-responsive pb-2 font-weight-bold">
              Best Product
            </h2>
            <h5 style={{ lineHeight: "2.4rem" }}>
              Vitamin C is essential for enhancing the skin’s resilience. Suited
              to use both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication. Vitamin
              C is essential for enhancing the skin’s resilience.
            </h5>
            <Link to="/allitem">
              <MDBBtn outline color="blue-grey">
                Check the Items
              </MDBBtn>
            </Link>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Concept;
