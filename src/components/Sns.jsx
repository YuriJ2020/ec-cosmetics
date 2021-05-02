import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

const MDBIconS = styled(MDBIcon)`
  color: #908585;

  &:hover {
    color: #756d6d;
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
            {/* <MDBRow>
              <MDBCol>
                <MDBIcon fab icon="twitter" size="2x" />
              </MDBCol>
              <MDBCol>
                <MDBIcon fab icon="instagram" size="2x" />
              </MDBCol>
              <MDBCol>
                <MDBIcon fab icon="facebook" size="2x" />
              </MDBCol>
            </MDBRow> */}
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
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default Sns;
