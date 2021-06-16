import React from "react";

import styled from "styled-components";
import { MDBContainer, MDBMask, MDBView } from "mdbreact";

import TitlePNG from "assets/bg-title.png";
import Title2PNG from "assets/bg-title2.png";
import Title3PNG from "assets/bg-title3.png";

const Shipping = () => {
  return (
    <>
      <MDBContainer className="p-0" fluid>
        <MDBView>
          <img src={Title2PNG} className="img-fluid" alt="" />
          <MDBMask className="flex-center" overlay="black-light">
            <h1 className="font-weight-bold text-white">About Delivery</h1>
          </MDBMask>
        </MDBView>
        <MDBContainer>
          <h5 className="py-5">
            Upon placement of your order, you will be sent an order confirmation
            to your email address. This also confirms that we have received your
            order. If you have not received an order confirmation, please verify
            that you have completed the payment process.
          </h5>
          <h4 className="py-3">SHIPPING</h4>
          <p>
            Orders Over $99 qualify for FREE shipping. Please note that if
            discounts, coupons or other offers reduce the value of the order to
            below $99, free shipping does not apply.
          </p>
          <p>
            Orders Under $99 are charged at a flat rate of $5 if the order
            consists of only samples or $12.50 for all other orders under 3kg.
            Express shipping is available for $15.50 for orders under 3kg or
            $17.50 for orders over 3kg. Unfortunately, we cannot offer free
            shipping on Express Deliveries.
          </p>
          <p className="pb-3">
            For the security and tracking of your parcel, we mark all shipments
            as requiring a "Signature on Delivery". If you would like to change
            this to "Authority to Leave", you will need to access the Australia
            Post MyPost website and update your preferences.
          </p>

          <h4 className="py-3">SHIPPING CUTOFFS FOR DAILY DISPATCH</h4>
          <p className="font-weight-bold">STANDARD AUSTRALIAN DELIVERY</p>
          <p>Monday - Friday: Orders will be shipped within 48 hours.</p>

          <p>Monday - Friday: Orders will be shipped within 48 hours.</p>
          <p>
            * Saturday - Sunday: Closed, all orders shipped within 48 hours of
            next business day. <br />* Public holidays: Closed, all orders
            shipped within 48 hours of next business day.
          </p>
          <p className="font-weight-bold pt-3">AUSTRALIAN SHIPPING</p>
          <p>Monday - Friday AEST: Orders will be shipped within 48 hours.</p>
        </MDBContainer>
      </MDBContainer>
    </>
  );
};

export default Shipping;
