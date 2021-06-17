import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

import styled from "styled-components";

import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
} from "mdbreact";

import navLogoSVG from "assets/nav-logo.svg";

const MDBNavbarNavS = styled(MDBNavbarNav)`
  letter-spacing: 0.2em;
  @media (min-width: 992px) {
    padding: 0 12rem;
  }
`;

const MDBNavLinkS = styled(MDBNavLink)`
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavBar = (props) => {
  const { children } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  return (
    <>
      <Router>
        <MDBNavbar
          color=""
          style={{ backgroundColor: "#c9abab" }}
          fixed="top"
          dark
          expand="md"
          scrolling
        >
          <MDBNavbarToggler onClick={toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
            <MDBNavbarNavS className="d-flex align-items-center ml-5">
              <MDBNavItem>
                <MDBNavLink to="/">HOME</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">HAIR</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">SKIN</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">BODY</MDBNavLink>
              </MDBNavItem>

              <MDBNavbarBrand>
                <MDBNavLinkS to="/">
                  <img src={navLogoSVG} className="img-fluid" alt="" />
                </MDBNavLinkS>
              </MDBNavbarBrand>

              <MDBNavItem>
                <MDBNavLink to="/about">ABOUT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <div className="d-none d-md-inline">SHIPPING</div>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBNavLink to="/shipping">
                      <MDBDropdownItem tag="span">DELIVELY</MDBDropdownItem>
                    </MDBNavLink>
                    <MDBNavLink to="/fandq">
                      <MDBDropdownItem tag="span">FAQs</MDBDropdownItem>
                    </MDBNavLink>
                    <MDBNavLink to="/terms">
                      <MDBDropdownItem tag="span">
                        TERMS & CONDITIONS
                      </MDBDropdownItem>
                    </MDBNavLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">CONTACT</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNavS>

            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon icon="search" />
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="shopping-cart" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Cart: 0 Items</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
        <MDBContainer
          fluid
          className="mx-0 px-0"
          // style={{ paddingTop: isNavbarFixed ? 102 : 0 }}
        >
          {children}
        </MDBContainer>
      </Router>
    </>
  );
};

const navBarWithSwitch = (CustomSwitch) => (
  <>
    <NavBar>
      <CustomSwitch />
    </NavBar>
  </>
);

export default navBarWithSwitch;
