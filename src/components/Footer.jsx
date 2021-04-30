import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import styled from "styled-components";

import logoPNG from "assets/logo.png";

const MDBContainerS = styled(MDBContainer)`
  background: linear-gradient(to top, #c9abab, #eeeff0);
  text-align: center;
`;

const Footer = () => {
  return (
    <>
      <MDBContainerS fluid className="white-text py-3">
        <div className="container pt-5">
          <img src={logoPNG} className="img-fluid py-5" alt="" />
          <MDBRow>
            <MDBCol>About</MDBCol>
            <MDBCol>Contact</MDBCol>
            <MDBCol>Shipping Delivery</MDBCol>
            <MDBCol>FAQs</MDBCol>
            <MDBCol>Terms & Conditions</MDBCol>
          </MDBRow>
          <hr className="white" />
          <p className="py-4">
            Copyright &copy;{new Date().getFullYear()}&nbsp; Lils
          </p>
        </div>
      </MDBContainerS>
    </>
  );
};

export default Footer;
