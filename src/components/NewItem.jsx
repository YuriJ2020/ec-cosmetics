import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

// import Slider from "react-slick";

import { MDBBtn, MDBCardImage, MDBMask, MDBView } from "mdbreact";
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

  // const simpleSlider = {
  //   dots: true,
  //   infinite: true,
  //   speed: 300,
  //   slidesToShow: 3,
  //   slidesToScroll: 1,
  // };

  return (
    <>
      {/* <Slider {...simpleSlider} className="m-5">
        <div>
          <Link to={detailsPath}>
            <MDBCardImage src={props.image} alt="" className="mx-auto p-2" />
          </Link>
        </div>
      </Slider> */}

      <MDBView hover zoom className="m-3">
        <Link to={detailsPath}>
          <MDBCardImage
            src={props.img}
            className="mx-auto img-fluid w-100"
            alt=""
          />
        </Link>
      </MDBView>

      <p className="pt-">{props.title}</p>
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
