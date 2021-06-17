import React from "react";
import { Link } from "react-router-dom";

import { MDBCardImage } from "mdbreact";

const AllItem = (props) => {
  const detailsPath = `/itemdetail/${props._id}`;

  return (
    <>
      <div>
        <Link to={detailsPath}>
          <MDBCardImage src={props.img} alt="" className="mx-auto p-2" waves />
        </Link>
        <p>{props.title}</p>
        <p>
          {props.size} / {props.price}
        </p>
      </div>
    </>
  );
};

export default AllItem;
