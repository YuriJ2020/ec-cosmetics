import React from "react";
import { Link } from "react-router-dom";

import _ from "lodash";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

const AllItemsComponent = (props) => {
  const detailsPath = `/itemdetail/${props._id}`;

  return (
    <>
      <MDBContainer className="text-center">
        <Link to={detailsPath}>
          <img src={props.img} className="img-fluid" alt="" className="p-2" />
        </Link>
        <p className="">{props.title}</p>
        <p>
          {props.size} / {props.price}
        </p>
      </MDBContainer>
    </>
  );
};

export default AllItemsComponent;
