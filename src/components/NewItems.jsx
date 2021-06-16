import React from "react";
import _ from "lodash";

import NewItem from "./NewItem";
import { getNewItems } from "../services/newItems";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";

const NewItems = () => {
  return (
    <>
      <MDBContainer className="py-5 text-center">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h2 className="responsive-h1 py-4 font-weight-bold">New Items</h2>
          <h5 className="pb-2">ORGANIC OILS</h5>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <MDBRow>
            {_.map(getNewItems(), (n) => (
              <MDBCol key={n._id} lg="3" md="3" sm="6" className="pb-3">
                <NewItem key={n._id} {...n} />
              </MDBCol>
            ))}
          </MDBRow>
        </ScrollAnimation>
      </MDBContainer>
    </>
  );
};

export default NewItems;
