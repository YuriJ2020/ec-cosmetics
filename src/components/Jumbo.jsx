import React from "react";

import { Link } from "react-router-dom";

import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardTitle,
  MDBIcon,
} from "mdbreact";

import styled from "styled-components";
import JumboJPG from "assets/bg-home.jpg";

const MDBContainerS = styled(MDBContainer)`
  background-image: url(${JumboJPG});
  min-height: 90vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const Jumbo = () => {
  return (
    <MDBContainerS fluid className="p-0 d-flex align-items-center white-text">
      <MDBCol>
        <MDBJumbotron className="bg-transparent shadow-none ">
          <h2 className="display-4">Hey Pink Lovers</h2>
          <hr className="w-50 ml-0 white" />
          <h3>Organic Cosmetics from Austalia</h3>
          <p className="lead py-4">
            <Link to="/allitem">
              <MDBBtn outline color="white">
                Check Products
              </MDBBtn>
            </Link>
          </p>
        </MDBJumbotron>
      </MDBCol>
    </MDBContainerS>
  );
};

export default Jumbo;
