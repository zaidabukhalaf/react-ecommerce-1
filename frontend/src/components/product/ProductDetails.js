import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import Rating from "../Rating";

const ProductDetails = (props) => {
  console.log(props);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image
            src="https://images-na.ssl-images-amazon.com/images/I/816E%2BKkm7VL._AC_SL1500_.jpg"
            alt=""
            fluid
          />
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>Product Name goes here</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={4.5} text="12 reviews" />
            </ListGroup.Item>
            <ListGroup.Item>Price: $150</ListGroup.Item>
            <ListGroup.Item>
              Description: this is a simple desc of a product that can be
              generated
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>$1000 </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>status</Col>
                <Col>in stock</Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Button className="btn-block" type="button">
              Add to Cart
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
