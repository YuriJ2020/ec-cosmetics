import React from "react";

// import Slider from "react-slick";

import { Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import styled from "styled-components";

import logoPNG from "assets/logo.png";

const MDBContainerS = styled(MDBContainer)`
  background: linear-gradient(to top, #c9abab, #eeeff0);
  text-align: center;
`;

const Footer = () => {
  // const simpleSlider = () => {
  //   dots: true;
  //   infinite: true;
  //   speed: 500;
  //   slidesToShow: 1;
  //   slidesToScroll: 1;
  // };

  return (
    <>
      <MDBContainerS fluid className="white-text py-3">
        {/* <Slider {...simpleSlider}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}

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
