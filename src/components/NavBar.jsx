import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";

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

import logoPNG from "assets/logo.png";

const NavBar = (props) => {
  const { children } = props;

  // const [isWideEnough, setWideEnough] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleCollapse = () => setIsOpen(!isOpen);

  // state = {
  //   isOpen: false,
  // };

  // toggleCollapse = () => {
  //   this.setState({ isOpen: !this.state.isOpen });
  // };

  return (
    <Router>
      <MDBNavbar
        color=""
        style={{ backgroundColor: "#c9abab" }}
        fixed="top"
        dark
        expand="md"
        scrolling
        transparent
      >
        <MDBNavbarBrand>
          <MDBNavLink to="/">
            <img src={logoPNG} className="img-fluid pl-5" alt="" />
          </MDBNavLink>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
          {/* isOpen={isOpen} */}
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/allitems">All Items</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/about">About</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <div className="d-none d-md-inline">Shipping Info</div>
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                  <MDBDropdownItem href="#!">Delivery</MDBDropdownItem>
                  <MDBDropdownItem href="#!">FAQs</MDBDropdownItem>
                  <MDBDropdownItem href="#!">
                    Terms & Conditions
                  </MDBDropdownItem>
                  <MDBDropdownItem href="#!">Contact</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
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
