import React from "react";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

import Store1PNG from "assets/store-1.png";
import Store2PNG from "assets/store-2.png";

const StoreLocation = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainer className="py-5">
          <h1>Store Locater</h1>
          <MDBRow className="d-flex align-items-center">
            <MDBCol lg="6">
              <img src={Store1PNG} className="img-fluid" alt="" />
              <h4 className="h3-responsive font-weight-bold py-2">
                Chadstone Store
              </h4>
              <p>La Trobe Street & Swanston Street, Melbourne VIC 3000</p>
              <p>03 9663 8830</p>
              <h5 className="font-weight-bold py-2">Store Hours</h5>
              <p>Mon to Wed: 10am - 7pm</p>
              <p>Thu to Fri: 10am - 9pm</p>
              <p> Sat to Sun: 10am -7pm</p>
            </MDBCol>
            <MDBCol lg="6">
              <img src={Store2PNG} className="img-fluid" alt="" />
              <h4 className="h3-responsive font-weight-bold py-2">
                Melbourne Central Store
              </h4>
              <p>1341 Dandenong Road, Chadstone VIC 3148</p>
              <p>03 9663 8830</p>

              <h5 className="font-weight-bold py-2">Store Hours</h5>
              <p>Mon to Wed: 10am - 7pm</p>
              <p>Thu to Fri: 10am - 9pm</p>
              <p> Sat to Sun: 10am -7pm</p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </ScrollAnimation>
    </>
  );
};

export default StoreLocation;
