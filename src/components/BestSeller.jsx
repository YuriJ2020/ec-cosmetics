import React from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBJumbotron,
  MDBCardTitle,
  MDBIcon,
  MDBMask,
  MDBView,
} from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

import styled from "styled-components";

import Concept1PNG from "assets/concept-1.png";
import Concept2PNG from "assets/concept-2.png";

import Concept3PNG from "assets/concept-3.png";
import Concept4PNG from "assets/concept-4.png";

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
const MDBJumbotronS = styled(MDBJumbotron)`
  @media (max-width: 992px) {
    margin: 2rem;
  }
`;

const DivS = styled.div`
  // display: block;
  // width: 40rem;
  // height: 30rem;
  // overflow: hidden;
`;

const MDBColS = styled(MDBCol)`
  // &:hover {
  //   transform: scale(1.2);
  //   transition: all 0.3s ease;
  // }
`;

const Concept = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        // initiallyVisible={true}
        animateOnce={true}
      >
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol lg="6" className="p-0">
              <MDBJumbotronS className="p-0 shadow-none">
                <Link to="allitems">
                  <MDBColS
                    className="text-white text-center py-5"
                    style={{
                      backgroundImage: `url(${Concept3PNG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <MDBCol>
                      <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                        Find Your Faves
                      </MDBCardTitle>
                      <p className="mx-5 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!
                      </p>
                      <MDBBtn outline color="white" className="mb-5">
                        <MDBIcon icon="clone" className="mr-2"></MDBIcon> View
                        Items
                      </MDBBtn>
                    </MDBCol>
                  </MDBColS>
                </Link>
              </MDBJumbotronS>
            </MDBCol>
            <MDBCol lg="6" className="p-0">
              <MDBJumbotronS className="p-0 shadow-none">
                <Link to="/allitems">
                  <MDBCol
                    className="text-white text-center"
                    style={{
                      backgroundImage: `url(${Concept4PNG})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  >
                    <MDBCol className="py-5">
                      <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">
                        What
                      </MDBCardTitle>
                      <p className="mx-5 mb-5">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Repellat fugiat, laboriosam, voluptatem, optio
                        vero odio nam sit officia accusamus minus error nisi
                        architecto nulla ipsum dignissimos. Odit sed qui,
                        dolorum!
                      </p>
                      <MDBBtn outline color="white" className="mb-5">
                        <MDBIcon icon="clone" className="mr-2"></MDBIcon> View
                        project
                      </MDBBtn>
                    </MDBCol>
                  </MDBCol>
                </Link>
              </MDBJumbotronS>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default Concept;
