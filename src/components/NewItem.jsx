import React from "react";

import { MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdbreact";

import styled from "styled-components";
import NiaPNG from "assets/ni-a.png";
import NibPNG from "assets/ni-b.png";
import NicPNG from "assets/ni-c.png";
import NidPNG from "assets/ni-d.png";

const MDBContainerS = styled(MDBContainer)``;

const NewItem = () => {
  return (
    <>
      <MDBContainer className="py-5 text-center blue-grey-text">
        <h2 className="responsive-h1 pb-4">New Items</h2>
        <h4 className="pb-3">Hand Wash Mist</h4>
        <MDBRow className="">
          <MDBCol md="6" lg="3" className="pb-3">
            <img src={NiaPNG} className="img-fluid" alt="" />
            <p className="pt-2">ItemsName</p>
            <p>size / price</p>
            <MDBBtn outline color="blue-grey">
              BUY
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6" lg="3" className="pb-3">
            <img src={NibPNG} className="img-fluid" alt="" />
            <p className="pt-2">ItemsName</p>
            <p>size / price</p>
            <MDBBtn outline color="blue-grey">
              BUY
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6" lg="3" className="pb-3">
            <img src={NicPNG} className="img-fluid" alt="" />
            <p className="pt-2">ItemsName</p>
            <p>size / price</p>
            <MDBBtn outline color="blue-grey">
              BUY
            </MDBBtn>
          </MDBCol>
          <MDBCol md="6" lg="3" className="pb-3">
            <img src={NidPNG} className="img-fluid" alt="" />
            <p className="pt-2">ItemsName</p>
            <p>size / price</p>
            <MDBBtn outline color="blue-grey">
              BUY
            </MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default NewItem;

{
  /* <img src={} className="img-fluid" alt="" /> */
}
