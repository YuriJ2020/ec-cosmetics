import React from "react";
import { Link } from "react-router-dom";

import Slider from "react-slick";

import styled from "styled-components";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBCardImage,
} from "mdbreact";

import Insta1PNG from "assets/insta-1.png";
import Insta2PNG from "assets/insta-2.png";
import Insta3PNG from "assets/insta-3.png";
import Insta4PNG from "assets/insta-4.png";
import Insta5PNG from "assets/insta-5.png";

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

const MDBIconS = styled(MDBIcon)`
  color: #607d8b;

  &:hover {
    color: #4a606b;
  }
`;

const Sns = () => {
  const simpleSlider = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <MDBContainer className="text-center">
        <MDBRow className="d-flex justify-content-center pb-3">
          <MDBCol lg="6" md="6" className="pb-4">
            <h2 className="py-3">Follow us</h2>
            <div className="d-flex justify-content-center">
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="twitter" size="2x" />
                </Link>
              </div>
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="instagram" size="2x" />
                </Link>
              </div>
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="facebook" size="2x" />
                </Link>
              </div>
            </div>
            {/* Sign Form */}
          </MDBCol>
          <MDBCol lg="6" md="6">
            <h2 className="py-3">Keep in Touch</h2>
            <p>Join & Recieve member's benefits.</p>
            <div className="d-flex justify-content-center">
              <form>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  placeholder="Enter email"
                />
              </form>
            </div>
            <div className="py-3">
              <MDBBtnS size="sm" color="">
                Send
              </MDBBtnS>
            </div>
          </MDBCol>
        </MDBRow>

        {/* Slider */}
        <Slider {...simpleSlider} className="m-5">
          <div>
            <Link to="/">
              <MDBCardImage src={Insta1PNG} alt="" className="mx-auto p-2" />
            </Link>
          </div>
          <div>
            <Link to="/">
              <MDBCardImage
                src={Insta2PNG}
                alt=""
                className="mx-auto p-2"
                waves
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <MDBCardImage
                src={Insta3PNG}
                alt=""
                className="mx-auto p-2"
                waves
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <MDBCardImage
                src={Insta4PNG}
                alt=""
                className="mx-auto p-2"
                waves
              />
            </Link>
          </div>
          <div>
            <Link to="/">
              <MDBCardImage
                src={Insta5PNG}
                alt=""
                className="mx-auto p-2"
                waves
              />
            </Link>
          </div>
        </Slider>
      </MDBContainer>
    </>
  );
};

export default Sns;
