import React from "react";

import { MDBContainer } from "mdbreact";

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
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer fluid className="p-0">
          <div className="text-center py-5">
            <h5>Follow Us on Instagram</h5>
            <h2 className="responsive-h1 pt-2">#BEWDYORGANICS</h2>
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
