import React from "react";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";
const Shipping = () => {
  return (
    <>
      <MDBContainer
        className="text-center py-5 white-text"
        style={{ backgroundColor: "	#908585" }}
        fluid
      >
        <h3 className="h2-responsive pb-5">Shipping Information</h3>
        <MDBRow>
          <MDBCol>
            <MDBIcon icon="cube" size="2x" />
            <h5 className=" py-4">Free Shipping</h5>
            <p>Free shipping over $50 to Australia wide.</p>
          </MDBCol>

          <MDBCol>
            <MDBIcon icon="truck" size="2x" />
            <h5 className="py-4">Quick Delivery</h5>
            <p>Quick delivery within 3 days.</p>
          </MDBCol>
          <MDBCol>
            <MDBIcon icon="phone" size="2x" />
            <h5 className="py-4">Customer Service</h5>
            <p>Customer service open 9 to 17 weekdays</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Shipping;
