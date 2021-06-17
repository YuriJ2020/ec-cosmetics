import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { MDBBtn, MDBCardImage, MDBView } from "mdbreact";

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

const NewItem = (props) => {
  const detailsPath = `/newitemdetail/${props._id}`;

  return (
    <>
      <MDBView hover zoom className="m-3">
        <Link to={detailsPath}>
          <MDBCardImage
            src={props.img}
            className="mx-auto img-fluid w-100"
            alt=""
          />
        </Link>
      </MDBView>

      <p>{props.title}</p>
      <p>
        {props.size} / {props.price}
      </p>
      <Link to={detailsPath}>
        <MDBBtnS color="">BUY</MDBBtnS>
      </Link>
    </>
  );
};

export default NewItem;
