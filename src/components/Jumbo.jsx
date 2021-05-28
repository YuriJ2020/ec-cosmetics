import React from "react";

import { Link } from "react-router-dom";

import styled from "styled-components";

import {
  MDBBtn,
  MDBContainer,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBCarouselCaption,
} from "mdbreact";

import Car1PNG from "assets/bg-car1.png";
import Car2PNG from "assets/bg-car2.png";
import Car3PNG from "assets/bg-car3.png";

const MDBContainerS = styled(MDBContainer)`
  @media (max-width: 992px) {
    padding-top: 5rem;
  }
`;

const MDBCarouselCaptionS = styled(MDBCarouselCaption)`
  top: 40%;
  left: -20%;
  // transform: translateX(-40%);
  // transform: translateY(-40%);
`;

const Jumbo = () => {
  return (
    <MDBContainerS fluid className="px-0">
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={false}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img className="d-block w-100" src={Car1PNG} alt="First slide" />
            </MDBView>
            <MDBCarouselCaptionS>
              <h1 className="h1-responsive py-2">World Winning Cosmetics</h1>
              <h5>Organic Cosmetics from Down Under</h5>
              <Link to="/allitems">
                <div className="py-3">
                  <MDBBtn outline color="white">
                    Check Products
                  </MDBBtn>
                </div>
              </Link>
            </MDBCarouselCaptionS>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img className="d-block w-100" src={Car2PNG} alt="Second slide" />
            </MDBView>
            <MDBCarouselCaption className="mb-5">
              <h1>screen 2</h1>
            </MDBCarouselCaption>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img className="d-block w-100" src={Car3PNG} alt="Third slide" />
            </MDBView>
            <MDBCarouselCaption className="mb-5">
              <h1>screen 3</h1>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainerS>

    // <MDBContainerS fluid className="p-0 d-flex align-items-center white-text">
    //   <MDBCol className="pt-5">
    //     <MDBJumbotron className="bg-transparent shadow-none">
    //       <h2 className="display-4">Hey Pink Lovers</h2>
    //       <hr className="w-50 ml-0 white" />
    //       <h3>Organic Cosmetics from Austalia</h3>
    //       <p className="lead py-4">
    //         <Link to="/allitems">
    //           <MDBBtn outline color="white">
    //             Check Products
    //           </MDBBtn>
    //         </Link>
    //       </p>
    //     </MDBJumbotron>
    //   </MDBCol>
    // </MDBContainerS>
  );
};

export default Jumbo;
