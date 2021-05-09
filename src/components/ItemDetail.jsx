import { React, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import _ from "lodash";

import { getAllItemsByID } from "../services/allItems";

import styled from "styled-components";

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";

const MDBColS = styled(MDBCol)`
  // @media (max-width: 576px) {
  //   order: first;
  // }
`;

const ItemDetail = () => {
  const params = useParams();
  const aid = _.get(params, "aid");
  const item = getAllItemsByID(aid);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MDBContainer style={{ paddingTop: "10rem" }}>
        <MDBRow>
          <MDBColS lg="6">
            <img
              src={item.img}
              className="img-fluid"
              alt=""
              style={{ width: "26rem" }}
            />
          </MDBColS>
          <MDBCol lg="6" className="mx-auto">
            <h1 className="pb-5">{item.title}</h1>
            <h5 style={{ lineHeight: "2rem" }}>{item.desc}</h5>
            <MDBRow className="py-5">
              <MDBCol>{item.title}</MDBCol>
              <MDBCol>
                {item.size} / {item.price}
              </MDBCol>
              {/* <MDBCol>{item.desc}</MDBCol> */}
            </MDBRow>

            <MDBRow>
              <MDBCol>
                <MDBBtn outline color="blue-grey">
                  Add to Cart
                </MDBBtn>
              </MDBCol>
              <MDBCol>
                <MDBInput
                  type="number"
                  className="form-control"
                  style={{ width: "100px" }}
                  className="light-grey"
                />
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        <div className="text-center py-5">
          <Link to="/">
            <MDBBtn outline color="blue-grey">
              Back to Home
            </MDBBtn>
          </Link>
        </div>
      </MDBContainer>
    </>
  );
};

export default ItemDetail;
