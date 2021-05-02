import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import { MDBBtn } from "mdbreact";

const MDBBtnS = styled(MDBBtn)`
  color: #908585;
  background-color: white;
  border: 2px solid #908585;
  &:hover {
    color: white;
    background-color: #908585;
    border: 2px solid #908585;
  }
`;

const NewItemComponent = (props) => {
  return (
    <>
      <img src={props.img} className="img-fluid" alt="" />
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
