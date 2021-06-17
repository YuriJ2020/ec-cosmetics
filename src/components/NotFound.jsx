import React from "react";

import { Link } from "react-router-dom";
import { MDBContainer, MDBBtn } from "mdbreact";

import styled from "styled-components";

import NotFoundPNG from "assets/notfound.png";

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

const NotFound = () => {
  return (
    <>
      <MDBContainer className="text-center">
        <img src={NotFoundPNG} alt="" />

        <h3 className="py-4">Sorry Hooman, page not found</h3>
        <div className="py-1">
          <Link to="/">
            <MDBBtnS outline color="">
              Back to Home
            </MDBBtnS>
          </Link>
        </div>
      </MDBContainer>
    </>
  );
};

export default NotFound;
