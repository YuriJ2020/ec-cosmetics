import { React, useEffect } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

import _ from "lodash";

import { getAllItems } from "../services/allItems";
import AllItem from "./AllItem";

import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Hr = styled.hr`
  height: 2rem;
`;

const AllItems = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <MDBContainer>
        <div>
          <Link to="/" className="text-left" style={{ color: "#908585" }}>
            <p>
              <span>HOME</span>&nbsp;/&nbsp;<span>ALL ITEMS</span>
            </p>
          </Link>

          <h3 className="h2-responsive pt-5">All Items</h3>
          <Hr />
          <MDBRow className="text-center">
            {_.map(getAllItems(), (a) => (
              <MDBCol key={a._id}>
                <AllItem key={a._id} {...a} />
              </MDBCol>
            ))}
          </MDBRow>
          <div className="py-5 text-center">
            <Link to="/">
              <MDBBtn outline color="blue-grey">
                Back to Home
              </MDBBtn>
            </Link>
          </div>
        </div>
      </MDBContainer>
    </>
  );
};

export default AllItems;
