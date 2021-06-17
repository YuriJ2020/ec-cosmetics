import { React, useEffect } from "react";

import { Accordion, Card, Button, Container } from "react-bootstrap";
import { MDBMask, MDBView } from "mdbreact";

import Title3PNG from "assets/bg-title3.png";

const FandQ = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container className="p-0" fluid>
      <MDBView>
        <img src={Title3PNG} className="img-fluid" alt="" />
        <MDBMask className="flex-center" overlay="black-light">
          <h1 className="font-weight-bold text-white">F & Q</h1>
        </MDBMask>
      </MDBView>

      <Container>
        <h4 className="py-3">Most Frequently asked questions: </h4>
        <Accordion className="text-left">
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="0"
                style={{ color: "#607d8b" }}
                className="px-0"
              >
                <h5>When was Bewdy Organic was founded?</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Bewdy Organic was founded in 2006. The skincare line was
                  officially launched to the Australian market in late November
                  2009, the United States in May 2017, and globally throughout
                  2018 and 2019.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <hr />
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="1"
                className="px-0"
                style={{ color: "#607d8b" }}
              >
                <h5>
                  Where are Bewdy Organics products made and manufactured?
                </h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Bewdy Organics continually sources the highest quality, finest
                  ingredients for our products from around the world.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <hr />
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="2"
                className="px-0"
                style={{ color: "#607d8b" }}
              >
                <h5>
                  Where are Bewdy Organics products made and manufactured?
                </h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                Bewdy Organics continually sources the highest quality, finest
                ingredients for our products from around the world.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <hr />
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="3"
                className="p-0"
                style={{ color: "#607d8b" }}
              >
                <h5>How much is shipping?</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                Bewdy Organics offers free shipping on all US website orders
                over $25. No promotion code is required and free shipping credit
                will be added automatically when $25+ is added to the cart. For
                orders under $25, a flat shipping fee of $5 will be applied at
                checkout.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <hr />
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="4"
                className="p-0"
                style={{ color: "#607d8b" }}
              >
                <h5>What should I do if I have an issue with my order?</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                We strive for 100% customer satisfaction. If you are unsatisfied
                or have any issues with your order, please reach out to our
                customer service team. You can reach us at
                online@johnmasters.com with any questions or concerns, we will
                be happy to assist you.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <hr />
          <Card className="border-0">
            <Card.Header className="bg-white border-0">
              <Accordion.Toggle
                as={Button}
                variant="link"
                eventKey="5"
                className="p-0"
                style={{ color: "#607d8b" }}
              >
                <h5>Is your packaging recyclable?</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                Generally, our product packaging is recyclable. Check the
                recycled symbol and your local recycling company to determine
                how to recycle.
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </Container>
  );
};

export default FandQ;
