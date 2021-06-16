import React from "react";
import { Link } from "react-router-dom";

import { MDBContainer } from "mdbreact";

// import Art1PNG from "assets/art-1.png";
// import Art2PNG from "assets/art-2.png";
// import Art3PNG from "assets/art-3.png";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";

const IframeS = styled.iframe`
  @media (min-width: 1200px) {
    min-height: 18rem;
  }
  @media (min-width: 768px) and (max-width: 1200px) {
    min-height: 14rem;
  }
`;

const Instagram = () => {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        // initiallyVisible={true}
        animateOnce={true}
      >
        <MDBContainer fluid className="p-0">
          {/* Article */}
          {/* <h2 className="pb-4 text-center responsive-h1">Article</h2>

          <div className="d-flex justify-content-between flex-wrap">
            <div className="p-2 text-left mx-auto">
              <Link to="/">
                <img src={Art1PNG} className="img-fluid" alt="" />
              </Link>
              <div className="d-flex justify-content-between">
                <div>
                  <p>20 May 2021</p>
                </div>
                <div>
                  <p>Skin Care</p>
                </div>
              </div>
              <p className="pt-2 text-left">Right way to wash your face</p>
              <hr />
            </div>
            <div className="p-2 text-left mx-auto">
              <Link to="/">
                <img src={Art2PNG} className="img-fluid" alt="" />
              </Link>
              <div className="d-flex justify-content-between">
                <div>
                  <p>20 May 2021</p>
                </div>
                <div>
                  <p>Skin Care</p>
                </div>
              </div>
              <p className="pt-2 text-left">Right way to wash your face</p>
              <hr />
            </div>
            <div className="p-2 text-left mx-auto">
              <Link to="/">
                <img src={Art3PNG} className="img-fluid" alt="" />
              </Link>
              <div className="d-flex justify-content-between">
                <div>
                  <p>20 May 2021</p>
                </div>
                <div>
                  <p>Skin Care</p>
                </div>
              </div>
              <p className="pt-2 text-left">Right way to wash your face</p>
              <hr />
            </div>
          </div> */}

          {/* Instagram */}

          <div className="text-center">
            <h2 className="responsive-h1 pt-5">Follow Us on instagram.</h2>
            <h5 className="py-3">@gradeorganics</h5>
          </div>

          <div className="p-0 m-0">
            <IframeS
              src="https://snapwidget.com/embed/885441"
              className="snapwidget-widget m-0 p-0"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              style={{
                border: "none",
                overflow: "hidden",
                width: "100%",
              }}
            ></IframeS>
          </div>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default Instagram;
