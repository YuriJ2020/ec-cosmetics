import { React, useEffect } from "react";
import _ from "lodash";

import { getAllItems } from "../services/allItems";
import AllItemsComponent from "./AllItemsComponent";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AllItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MDBContainer className="text-center">
        <h2 className="h1-responsive py-5">All Items</h2>
        <MDBRow>
          {_.map(getAllItems(), (a) => (
            <MDBCol key={a._id}>
              <AllItemsComponent key={a._id} {...a} />
            </MDBCol>
          ))}
        </MDBRow>
      </MDBContainer>
    </>
  );
};

export default AllItems;
