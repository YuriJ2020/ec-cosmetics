import React from "react";
import { Link } from "react-router-dom";

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

import Art1PNG from "assets/art-1.png";
import Art2PNG from "assets/art-2.png";
import Art3PNG from "assets/art-3.png";

import Insta1PNG from "assets/insta-1.png";
import Insta2PNG from "assets/insta-2.png";
import Insta3PNG from "assets/insta-3.png";
import Insta4PNG from "assets/insta-4.png";
import Insta5PNG from "assets/insta-5.png";

const Info = () => {
  return (
    <>
      <MDBContainer className="py-5">
        {/* Article */}
        <h2 className="pb-4 text-center responsive-h1">Article</h2>

        <div className="d-flex justify-content-between flex-wrap">
          <div className="p-2 text-left mx-auto">
            <Link to="/">
              <img src={Art1PNG} className="img-fluid" alt="" />
            </Link>
            <div className="d-flex justify-content-between">
              <div>
                <p>20 May 2021</p>
              </div>
              <div>
                <p>Skin Care</p>
              </div>
            </div>
            <p className="pt-2 text-left">Right way to wash your face</p>
            <hr />
          </div>
          <div className="p-2 text-left mx-auto">
            <Link to="/">
              <img src={Art2PNG} className="img-fluid" alt="" />
            </Link>
            <div className="d-flex justify-content-between">
              <div>
                <p>20 May 2021</p>
              </div>
              <div>
                <p>Skin Care</p>
              </div>
            </div>
            <p className="pt-2 text-left">Right way to wash your face</p>
            <hr />
          </div>
          <div className="p-2 text-left mx-auto">
            <Link to="/">
              <img src={Art3PNG} className="img-fluid" alt="" />
            </Link>
            <div className="d-flex justify-content-between">
              <div>
                <p>20 May 2021</p>
              </div>
              <div>
                <p>Skin Care</p>
              </div>
            </div>
            <p className="pt-2 text-left">Right way to wash your face</p>
            <hr />
          </div>
        </div>

        {/* Instagram */}
        <div className="text-center">
          <h2 className="responsive-h1 pt-5">Instagram</h2>
          <h5 className="py-3">@Lils</h5>
        </div>

        <div className="d-flex justify-content-center">
          <div className="text-center">
            <img src={Insta1PNG} className="img-fluid" alt="" className="m-1" />
            <img src={Insta2PNG} className="img-fluid" alt="" className="m-1" />
            <img src={Insta3PNG} className="img-fluid" alt="" className="m-1" />
            <img src={Insta4PNG} className="img-fluid" alt="" className="m-1" />
            <img src={Insta5PNG} className="img-fluid" alt="" className="m-1" />
          </div>
        </div>
      </MDBContainer>
    </>
  );
};

export default Info;
