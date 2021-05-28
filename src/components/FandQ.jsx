import React from "react";

import { Accordion, Card, Button } from "react-bootstrap";

const FandQ = () => {
  return (
    <div className="container">
      <h1 className="h1-responsive">F & Q</h1>
      <h4 className="py-3">Most Frequently asked questions: </h4>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              When was Lils was founded?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Lils was founded in 2006. The skincare line was officially
              launched to the Australian market in late November 2009, the
              United States in May 2017, and globally throughout 2018 and 2019.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Where are Lils products made and manufactured?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lils continually sources the highest quality, finest ingredients
              for our products from around the world.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Where are Lils products made and manufactured?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lils continually sources the highest quality, finest ingredients
              for our products from around the world.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Where are Lils products made and manufactured?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lils continually sources the highest quality, finest ingredients
              for our products from around the world.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Where are Lils products made and manufactured?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lils continually sources the highest quality, finest ingredients
              for our products from around the world.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Where are Lils products made and manufactured?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Lils continually sources the highest quality, finest ingredients
              for our products from around the world.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default FandQ;
