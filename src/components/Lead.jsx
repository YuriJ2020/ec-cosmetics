import { Link } from "react-router-dom";
import React from "react";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";
import LeadPNG from "assets/lead.png";

const Lead = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
      <MDBContainer fluid className="py-5">
        <MDBContainer style={{ backgroundColor: "#939184" }}>
          <div className="p-5">
            <MDBRow>
              <MDBCol
                lg="6"
                className="d-flex flex-column justify-content-center"
              >
                <img src={LeadPNG} alt="" className="img-fluid w-100" />
              </MDBCol>
              <MDBCol lg="6" className=" text-white">
                <h2 className="text-center font-weight-bold py-3">
                  ABOUT BEWDY ORGANICS
                </h2>
                <h5>
                  Using certified organic and biodynamic farming methods, we
                  care for our farm as an integrated, living organism.
                  Everything we do supports the health and vitality of our farm
                  and contributes to the vigorous ecosystem of the hills.
                </h5>
                <div className="py-2 text-center">
                  <Link to="/about">
                    <MDBBtn outline color="white">
                      KNOW
                    </MDBBtn>
                  </Link>
                </div>
              </MDBCol>
            </MDBRow>
          </div>
        </MDBContainer>
      </MDBContainer>
    </ScrollAnimation>
  );
};

export default Lead;
