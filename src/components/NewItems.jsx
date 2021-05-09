import React from "react";
import _ from "lodash";

import NewItemComponent from "./NewItemComponent";
import { getNewItemsByID, getNewItems } from "../services/newItems";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

import styled from "styled-components";
// import NiaPNG from "assets/ni-a.png";
// import NibPNG from "assets/ni-b.png";
// import NicPNG from "assets/ni-c.png";
// import NidPNG from "assets/ni-d.png";

const NewItem = () => {
  return (
    <>
      <MDBContainer className="py-5 text-center">
        <h2 className="responsive-h1 pb-4">New Items</h2>
        <h5 className="pb-5">Hand Wash Mist</h5>
        <MDBRow>
          {_.map(getNewItems(), (n) => (
            <MDBCol key={n._id} md="6" lg="3" className="pb-3">
              <NewItemComponent key={n._id} {...n} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default NewItem;

{
  /* <img src={} className="img-fluid" alt="" /> */
}
