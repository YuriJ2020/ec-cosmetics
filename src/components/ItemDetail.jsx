import React from "react";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

import BestPNG from "assets/best.png";

const MDBColS = styled(MDBCol)`
  // @media (max-width: 576px) {
  //   order: first;
  // }
`;

const ItemDetail = () => {
  return (
    <>
      <MDBContainer className="blue-grey-text py-5">
        <MDBRow>
          <MDBCol lg="6">
            <h1 className="pb-5">Hand mist wash</h1>
            <h5 style={{ lineHeight: "2rem" }}>
              Vitamin C is essential for enhancing the skin’s resilience. Suited
              to use both morning and evening, this potent ingredient offers
              significant benefits when paired with time and dedication. Vitamin
              C is essential for enhancing the skin’s resilience.
            </h5>
            <MDBRow className="py-5">
              <MDBCol>TYPE A</MDBCol>
              <MDBCol>70m / $20</MDBCol>
              <MDBCol>TYPE A</MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBBtn outline color="blue-grey">
                  Add to Cart
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBInput
                  type="number"
                  className="form-control"
                  style={{ width: "100px" }}
                  className="light-grey"
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
          <MDBColS lg="6">
            <img src={BestPNG} className="img-fluid" alt="" />
          </MDBColS>
        </MDBRow>
        {/* <MDBRow className="d-flex align-items-center">
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
            <img src={BestPNG} className="img-fluid" alt="" />
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
    </>
  );
};

export default ItemDetail;
