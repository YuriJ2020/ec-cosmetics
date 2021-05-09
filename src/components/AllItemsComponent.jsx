import React from "react";
import { Link } from "react-router-dom";

import _ from "lodash";

import { MDBCardImage } from "mdbreact";

const AllItemsComponent = (props) => {
  const detailsPath = `/itemdetail/${props._id}`;

  return (
    <>
      <div>
        <Link to={detailsPath}>
          <MDBCardImage src={props.img} alt="" className="mx-auto p-2" waves />
        </Link>
        <p className="">{props.title}</p>
        <p>
          {props.size} / {props.price}
        </p>
      </div>
    </>
  );
};

export default AllItemsComponent;
