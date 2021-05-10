import React from "react";

import { Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol, MDBCardImage } from "mdbreact";

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
            <MDBCol>
              <Link to="/about" className="white-text">
                About
              </Link>
            </MDBCol>
            <MDBCol>
              <Link to="/contact" className="white-text">
                Contact
              </Link>
            </MDBCol>
            <MDBCol>
              <Link to="/shipping" className="white-text">
                Shipping Delivery
              </Link>
            </MDBCol>
            <MDBCol>
              <Link to="/faqs" className="white-text">
                FAQs
              </Link>
            </MDBCol>
            <MDBCol>
              <Link to="/terms" className="white-text">
                Terms & Conditions
              </Link>
            </MDBCol>
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
