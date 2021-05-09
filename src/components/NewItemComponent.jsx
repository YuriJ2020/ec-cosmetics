import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MDBBtn, MDBCardImage } from "mdbreact";

const MDBBtnS = styled(MDBBtn)`
  color: #607d8b;
  background-color: white;
  border: 2px solid #607d8b;
  &:hover {
    color: white;
    background-color: #607d8b;
    border: 2px solid #607d8b;
  }
`;

const NewItemComponent = (props) => {
  return (
    <>
      <Link to="/allitems">
        <MDBCardImage src={props.img} className="mx-auto p-0" alt="" waves />
      </Link>
      <p className="pt-2">{props.title}</p>
      <p>
        {props.size} / {props.price}
      </p>
      <Link to="/allitems">
        <MDBBtnS color="">BUY</MDBBtnS>
      </Link>
    </>
  );
};

export default NewItemComponent;
