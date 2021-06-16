import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";

import styled from "styled-components";

import { Link } from "react-router-dom";

import ScrollAnimation from "react-animate-on-scroll";

import Cate1PNG from "assets/aaa.png";
import Cate2PNG from "assets/bbb.png";
import Cate3PNG from "assets/ccc.png";
import Cate4PNG from "assets/ddd.png";

const MDBRowS = styled(MDBRow)`
  @media (min-width: 992px) {
    padding: 0 8rem;
  }
`;

const Categories = () => {
  return (
    <>
      <h2 className="text-center font-weight-bold py-5">
        Choose by Categories
      </h2>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer className="text-center">
          <MDBRowS className="pb-5">
            <MDBCol className="mb-4 text-center">
              <Link to="/allitems">
                <MDBView zoom className="w-100" waves>
                  <img src={Cate1PNG} className="img-fluid" alt="" />
                  <MDBMask className="flex-center" overlay="white-slight">
                    <h3 className="white-text">SKIN CARE</h3>
                  </MDBMask>
                </MDBView>
              </Link>
            </MDBCol>
            <MDBCol>
              {" "}
              <MDBView zoom className="w-100" waves>
                <img src={Cate2PNG} className="img-fluid" alt="" />
                <MDBMask className="flex-center" overlay="stylish-light">
                  <h3 className="text-white">MOISUTURE CREAMS</h3>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <div className="w-100"></div>
            <MDBCol>
              {" "}
              <MDBView zoom className="w-100 mx-auto" waves>
                <img src={Cate3PNG} className="img-fluid" alt="" />
                <MDBMask className="flex-center" overlay="white-slight">
                  <h3 className="white-text">DIFFUSERS</h3>
                </MDBMask>
              </MDBView>
            </MDBCol>
            <MDBCol>
              {" "}
              <MDBView zoom className="w-100 mx-auto" waves>
                <img src={Cate4PNG} className="img-fluid" alt="" />

                <MDBMask className="flex-center" overlay="white-slight">
                  <h3 className="white-text">BODY SOAPS</h3>
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
