import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

import JumboPNG from "assets/bg-jumbo.png";
import Jumbo2PNG from "assets/bg-jumbo2.png";
import Jumbo3PNG from "assets/bg-jumbo3.png";

const MDBContainerS = styled(MDBContainer)`
  @media (min-width: 992px) {
    padding-top: 3rem;
  }
  @media (max-width: 992px) {
    padding-top: 3rem;
  }
`;

const MDBCardTitleS = styled(MDBCardTitle)`
  font-family: "Playfair Display", serif;
`;

const MDBColS = styled(MDBCol)`
  @media (max-width: 992px) {
  }
`;

const H4S = styled.h4`
  @media (max-width: 768px) {
    display: none;
  }
`;

const MDBMaskS = styled(MDBMask)`
  @media (min-width: 768px) {
    margin: 3rem 0;
  }
`;

const Jumbo = () => {
  return (
    <MDBContainerS fluid className="px-0">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block img-fluid w-100"
                src={Jumbo2PNG}
                alt="Second slide"
                style={{
                  backgroundSize: " cover",
                  minHeight: "42vh",
                }}
              />
              <MDBMaskS
                className="d-flex justify-content-start align-items-center text-white py-5 px-4"
                overlay="black-slight"
              >
                <MDBRow>
                  <MDBColS>
                    <H4S className="mx-5 my-2">
                      100% Natural Skin Enriching Makeup
                    </H4S>
                    <MDBCardTitleS className="h1-responsive pt-3 m-5 font-weight-bold">
                      NATURAL FLAWLESS MAKEUP
                    </MDBCardTitleS>
                    <H4S className="mx-5 mb-5">
                      More than just organic skin care products
                    </H4S>
                    <div className="m-5">
                      <Link to="/allitems">
                        <MDBBtn outline color="white">
                          <MDBIcon icon="clone" className="mr-2"></MDBIcon>
                          VIEW PRODUCTS
                        </MDBBtn>
                      </Link>
                    </div>
                  </MDBColS>
                </MDBRow>
              </MDBMaskS>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={JumboPNG}
                alt="First slide"
                style={{
                  backgroundSize: " cover",
                  minHeight: "42vh",
                }}
              />
              <MDBMaskS
                className="d-flex justify-content-start align-items-center text-white py-5 px-4"
                overlay="black-slight"
              >
                <MDBRow>
                  <MDBCol>
                    <H4S className="mx-5 my-2">
                      100% Natural Skin Enriching Makeup
                    </H4S>
                    <MDBCardTitleS className="h1-responsive pt-3 m-5 font-weight-bold">
                      NATURAL FLAWLESS MAKEUP
                    </MDBCardTitleS>
                    <H4S className="mx-5 mb-5">
                      More than just organic skin care products
                    </H4S>
                    <div className="m-5">
                      <Link to="/allitems">
                        <MDBBtn outline color="white">
                          <MDBIcon icon="clone" className="mr-2"></MDBIcon>
                          VIEW PRODUCTS
                        </MDBBtn>
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBMaskS>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={Jumbo3PNG}
                alt="Third slide"
                style={{
                  backgroundSize: " cover",
                  minHeight: "42vh",
                }}
              />
              <MDBMaskS
                className="d-flex justify-content-end align-items-center text-white py-5 px-4"
                overlay="black-slight"
              >
                <MDBRow>
                  <MDBCol className="text-right">
                    <H4S className="mx-5 my-2">
                      100% Natural Skin Enriching Makeup
                    </H4S>
                    <MDBCardTitleS className="h1-responsive pt-3 m-5 font-weight-bold">
                      NATURAL FLAWLESS MAKEUP
                    </MDBCardTitleS>
                    <H4S className="mx-5 mb-5">
                      More than just organic skin care products
                    </H4S>
                    <div className="m-5">
                      <Link to="/allitems">
                        <MDBBtn outline color="white">
                          <MDBIcon icon="clone" className="mr-2"></MDBIcon>
                          VIEW PRODUCTS
                        </MDBBtn>
                      </Link>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBMaskS>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainerS>
  );
};

export default Jumbo;

// d
// #745454
// #a45438
// #c59c9c
// #e6c2c2
// l
