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

import Logo2SVG from "assets/logo2.svg";

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
            <MDBNavbarNavS className="d-flex align-items-center">
              <MDBNavItem>
                <MDBNavLink to="/allitems">HAIR</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">SKIN</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">BODY</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/allitems">OTHER</MDBNavLink>
              </MDBNavItem>
              <MDBNavbarBrand>
                <MDBNavLinkS to="/">
                  <img src={Logo2SVG} className="img-fluid" alt="" />
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
                      <MDBDropdownItem tag="span">Delivery</MDBDropdownItem>
                    </MDBNavLink>
                    <MDBNavLink to="/fandq">
                      <MDBDropdownItem tag="span">FAQs</MDBDropdownItem>
                    </MDBNavLink>
                    <MDBNavLink to="/terms">
                      <MDBDropdownItem tag="span">
                        Terms & Conditions
                      </MDBDropdownItem>
                    </MDBNavLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="/contact">CONTACT</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNavS>
            {/* <MDBNavbarNav right>
              <MDBNavItem>
                <MDBNavLink className="waves-effect waves-light" to="#!">
                  <MDBIcon fab icon="twitter" />
                </MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="shopping-cart" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="#!">Cart: 3 Items</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
            </MDBNavbarNav> */}
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
