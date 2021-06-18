import React from "react";

import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdbreact";

import styled from "styled-components";
import LogoDSVG from "assets/logo-d.svg";

const FooterContainer = styled.footer`
  .footer-middle {
    padding-top: 3rem;
  }

  .footer-bottom {
    margin-top: 1rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const MDBContainerS = styled(MDBContainer)`
  background: linear-gradient(to top, #c9abab, white);
`;

const LinkS = styled(Link)`
  color: #565d61;

  &:hover {
    color: #41474a;
  }
`;

const MDBIconS = styled(MDBIcon)`
  color: #607d8b;

  &:hover {
    color: #4a606b;
  }
`;

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <div className=" footer-middle">
          <MDBContainerS fluid className="pt-5">
            <MDBRow className="justify-content-around">
              <MDBCol md="2" sm="6">
                <Link to="/">
                  <img src={LogoDSVG} className="img-fluid my-2" alt="" />
                </Link>
              </MDBCol>
              <MDBCol md="2" sm="6">
                <ul className="list-unstyled">
                  <h5 className="pt-2">OUR OFFICE</h5>
                  <hr />
                  <li>
                    <p> 1 Organic Street, Melbourne VIC 3000</p>
                  </li>
                  <li>
                    <LinkS to="/">
                      <p className="text-nowrap m-0">
                        <MDBIcon icon="phone" />
                        &nbsp; PHONE: 012-345-678
                      </p>
                    </LinkS>
                  </li>
                  <li>
                    <LinkS to="/">
                      <p className="text-nowrap">
                        <MDBIcon icon="envelope" />
                        &nbsp; bewdyorganics@cosmetics.com
                      </p>
                    </LinkS>
                  </li>
                  <li>
                    <MDBRow>
                      <MDBCol>
                        <a target="_blank" href="https://twitter.com/?lang=en">
                          <MDBIconS fab icon="twitter" size="2x" />
                        </a>
                      </MDBCol>
                      <MDBCol>
                        <a target="_blank" href="https://www.facebook.com/">
                          <MDBIconS fab icon="facebook" size="2x" />
                        </a>
                      </MDBCol>
                      <MDBCol>
                        <a target="_blank" href="https://www.instagram.com/">
                          <MDBIconS fab icon="instagram" size="2x" />
                        </a>
                      </MDBCol>
                    </MDBRow>
                  </li>
                </ul>
              </MDBCol>

              <MDBCol md="2" sm="6">
                <h5>SHOPPING</h5>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <LinkS to="/allitems">All Items</LinkS>
                  </li>
                  <li>
                    <LinkS to="/allitems">New Items</LinkS>
                  </li>
                  <li>
                    <LinkS to="/about">About</LinkS>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="2" sm="6">
                <h5>SHIPPING INFO</h5>
                <hr />
                <ul className="list-unstyled">
                  <li>
                    <LinkS to="/shipping">Delivery</LinkS>
                  </li>
                  <li>
                    <LinkS to="/fandq">F & Q</LinkS>
                  </li>
                  <li>
                    <LinkS to="/terms">Terms & Conditions</LinkS>
                  </li>
                  <li>
                    <LinkS to="/contact">Contact</LinkS>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
            <hr className="white" />
            <p className="py-5 text-white text-center font-weight-bold">
              Copyright &copy;{new Date().getFullYear()}&nbsp; Bewdy Organics
            </p>
          </MDBContainerS>
        </div>
      </FooterContainer>
    </>
  );
};
export default Footer;
