import React from "react";
import _ from "lodash";

import NewItem from "./NewItem";
import { getNewItems1 } from "../services/newItems1";
import { getNewItems2 } from "../services/newItems2";

import { Container, Carousel, Row, Col } from "react-bootstrap";

import ScrollAnimation from "react-animate-on-scroll";

const NewItems = () => {
  return (
    <>
      <Container className="py-5 text-center">
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <h5 className="pb-2">The Best in Bewdy</h5>
          <h2 className="responsive-h1 py-3 font-weight-bold">
            OUR BEST SELLERS
          </h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
          <Carousel className="p-5">
            <Carousel.Item>
              <Row>
                {_.map(getNewItems1(), (n) => (
                  <Col key={n._id} className="pb-3 mx-auto">
                    <NewItem key={n._id} {...n} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                {_.map(getNewItems2(), (n) => (
                  <Col key={n._id} className="pb-3 mx-auto">
                    <NewItem key={n._id} {...n} />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          </Carousel>
        </ScrollAnimation>
      </Container>
    </>
  );
};

export default NewItems;
