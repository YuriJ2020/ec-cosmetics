import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBMask, MDBView } from "mdbreact";

import ScrollAnimation from "react-animate-on-scroll";
import styled from "styled-components";
import { Parallax } from "react-parallax";

import Title4PNG from "assets/bg-title4.png";
import LeftPNG from "assets/left.png";
import RightPNG from "assets/right.png";
import OrganicPNG from "assets/organic.png";

import IconVSVG from "assets/icon-v.svg";
import IconCSVG from "assets/icon-c.svg";
import IconOSVG from "assets/icon-o.svg";
import IconGSVG from "assets/icon-g.svg";

import BgMailPNG from "assets/bg-mail.png";

const MDBContainerS = styled(MDBContainer)``;

const ImgS = styled.img``;

const MDBRowS = styled(MDBRow)`
  // @media (min-width: 768px) {
  //   margin: 4rem;
  // }
`;

const About = () => {
  return (
    <>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <MDBContainerS className="p-0" fluid>
          <MDBView>
            <img src={Title4PNG} className="img-fluid w-100" alt="" />
            <MDBMask className="flex-center" overlay="black-light">
              <h1 className="font-weight-bold text-white">OUR STORY</h1>
            </MDBMask>
          </MDBView>
          <MDBContainer>
            <h2 className="font-weight-bold text-center py-5">About Us</h2>
            <p>
              We know skincare goes beyond skin deep so we are here to address
              your skin concerns, whatever they may be. For us it’s all about
              getting better skin by doing the least harm possible. We stand for
              beauty that doesn’t cost the earth, with affordable, clean vegan
              and cruelty-free formulas that deliver real results. We believe in
              our products so much that we offer a 365-day money back guarantee.
              Listening to our community is at the heart of everything we do, so
              if you have something to say, we want to hear it.
            </p>

            <MDBRowS>
              <MDBCol
                md="4"
                className="d-flex flex-column justify-content-center"
              >
                <h3 className="font-weight-bold">Science</h3>
                <p>
                  At Facetheory, nature meets science to transform skin for the
                  better. We’re big fans of botanical extracts, especially where
                  they add to the efficacy of the product. Lots of our formulas
                  take a dual approach of carefully chosen botanicals like green
                  tea and chamomile which are combined with high-performing
                  actives like retinol and vitamin c. We don’t disavow science
                  in our natural formulas - some of our ingredients like the
                  raspberry succinate in Lipabalm are truly cutting-edge.
                </p>
              </MDBCol>

              <MDBCol size="6" md="8">
                <ImgS src={LeftPNG} alt="" className="img-fluid w-100" />
              </MDBCol>
            </MDBRowS>

            <MDBRowS className="py-5">
              <MDBCol size="6" md="8">
                <ImgS src={RightPNG} alt="" className="img-fluid w-100" />
              </MDBCol>
              <MDBCol
                md="4"
                className="d-flex flex-column justify-content-center"
              >
                <h3 className="font-weight-bold">
                  Sustainability And The Planet
                </h3>
                <p>
                  Since Facetheory began, our founders and staff have always put
                  sustainability and the planet above anything else. We’re
                  ridding ourselves of single-use plastic. Most of our products
                  are now available in amber glass jars with aluminium caps - or
                  100% aluminium tubes which are easy to recycle. Your order is
                  packed with materials that are biodegradable and we try to use
                  the
                </p>
              </MDBCol>
            </MDBRowS>
            <MDBRowS className="text-center m-5">
              <MDBCol>
                <ImgS src={IconVSVG} className="img-fluid w-50" alt="" />
                <h5 className="py-4 font-weight-bold">VEGAN</h5>
              </MDBCol>

              <MDBCol>
                <ImgS src={IconCSVG} className="img-fluid w-50" alt="" />
                <h5 className="py-4 font-weight-bold">CRUELTY FREE</h5>
              </MDBCol>
              <MDBCol>
                <ImgS src={IconOSVG} className="img-fluid w-50" alt="" />
                <h5 className="py-4 font-weight-bold">100% ORGANIC</h5>
              </MDBCol>
              <MDBCol>
                <ImgS src={IconGSVG} className="img-fluid w-50" alt="" />
                <h5 className="py-4 font-weight-bold">GMO FREE</h5>
              </MDBCol>
            </MDBRowS>
          </MDBContainer>

          <Parallax
            blur={0}
            bgImage={OrganicPNG}
            bgImageAlt="powder"
            strength={240}
            className="p-5"
          >
            <MDBContainer>
              <h4 className="m-5 text-white" style={{ lineHeight: "2rem" }}>
                With 70+ stores in Japan & the United States, and available in
                40 other countries worldwide, we at John Masters Organics do our
                best to inspire people all over the world to discover and
                cultivate their own beauty, naturally.
              </h4>
            </MDBContainer>
          </Parallax>
        </MDBContainerS>
      </ScrollAnimation>
    </>
  );
};

export default About;
