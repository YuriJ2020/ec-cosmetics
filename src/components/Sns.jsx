import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";

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

const MDBIconS = styled(MDBIcon)`
  color: #607d8b;

  &:hover {
    color: #4a606b;
  }
`;

const Sns = () => {
  return (
    <>
      <MDBContainer className="text-center">
        <MDBRow className="d-flex justify-content-center pb-3">
          <MDBCol lg="6" md="6" className="pb-4">
            <h2 className="py-3">Follow us</h2>
            <div className="d-flex justify-content-center">
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="twitter" size="2x" />
                </Link>
              </div>
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="instagram" size="2x" />
                </Link>
              </div>
              <div className="p-2 text-left">
                <Link to="/">
                  <MDBIconS fab icon="facebook" size="2x" />
                </Link>
              </div>
            </div>
            {/* Sign Form */}
          </MDBCol>
          <MDBCol lg="6" md="6">
            <h2 className="py-3">Keep in Touch</h2>
            <p>Join & Recieve member's benefits.</p>
            <div className="d-flex justify-content-center">
              <form>
                <input
                  type="email"
                  id="defaultFormLoginEmailEx"
                  className="form-control"
                  placeholder="Enter email"
                />
              </form>
            </div>
            <div className="py-3">
              <MDBBtnS size="sm" color="">
                Send
              </MDBBtnS>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Sns;
