import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";

import styled from "styled-components";

import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import Cate1PNG from "assets/cate-1.png";
import Cate2PNG from "assets/cate-2.png";
import Cate3PNG from "assets/cate-3.png";
import Cate4PNG from "assets/cate-4.png";

const MDBRowS = styled(MDBRow)`
  @media (min-width: 992px) {
    padding: 0 8rem;
  }
`;

const Categories = () => {
  return (
    <>
      <div className="text-center py-5">
        <h5>Only Pure Natural Ingredients</h5>
        <h2 className="py-3 font-weight-bold">CHOOSE BY CATEGORIES</h2>
      </div>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer className="text-center">
          <MDBRowS className="pb-5">
            <MDBCol className="mb-4 text-center">
              <Link to="/allitems">
                <MDBView zoom className="w-100" waves>
                  <img src={Cate1PNG} className="img-fluid" alt="" />
                  <MDBMask className="flex-center" overlay="white-slight">
                    <h2 className="white-text">SKIN CARE</h2>
                  </MDBMask>
                </MDBView>
              </Link>
            </MDBCol>
            <MDBCol>
              <MDBView zoom className="w-100" waves>
                <img src={Cate2PNG} className="img-fluid" alt="" />
                <MDBMask className="flex-center" overlay="stylish-light">
                  <h2 className="text-white">MOISUTURE CREAMS</h2>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <div className="w-100"></div>
            <MDBCol>
              <MDBView zoom className="w-100 mx-auto" waves>
                <img src={Cate3PNG} className="img-fluid" alt="" />
                <MDBMask className="flex-center" overlay="white-slight">
                  <h2 className="white-text">DIFFUSERS</h2>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol>
              <MDBView zoom className="w-100 mx-auto" waves>
                <img src={Cate4PNG} className="img-fluid" alt="" />

                <MDBMask className="flex-center" overlay="white-slight">
                  <h2 className="white-text">BODY SOAPS</h2>
                </MDBMask>
              </MDBView>
            </MDBCol>
          </MDBRowS>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default Categories;
