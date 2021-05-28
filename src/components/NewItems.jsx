import React from "react";
import _ from "lodash";

import NewItemComponent from "./NewItemComponent";
import { getNewItems } from "../services/newItems";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

const NewItem = () => {
  return (
    <>
      <MDBContainer className="py-5 text-center">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="responsive-h1 pb-4">New Items</h2>
          <h5 className="pb-5">Hand Wash Mist</h5>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <MDBRow>
            {_.map(getNewItems(), (n) => (
              <MDBCol key={n._id} md="6" lg="3" className="pb-3">
                <NewItemComponent key={n._id} {...n} />
              </MDBCol>
            ))}
          </MDBRow>
        </ScrollAnimation>
      </MDBContainer>
    </>
  );
};

export default NewItem;
