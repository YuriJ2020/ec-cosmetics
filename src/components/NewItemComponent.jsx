import React from "react";

import { MDBBtn } from "mdbreact";

const NewItemComponent = (props) => {
  return (
    <>
      <img src={props.img} className="img-fluid" alt="" />
      <p className="pt-2">{props.title}</p>
      <p>
        {props.size} / {props.price}
      </p>
      <MDBBtn outline color="blue-grey">
        BUY
      </MDBBtn>
    </>
  );
};

export default NewItemComponent;
