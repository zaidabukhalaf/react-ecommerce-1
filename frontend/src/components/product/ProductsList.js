import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "./Product";

const product = {
  _id: 1,
  name: "product 1",
  image:
    "https://images-na.ssl-images-amazon.com/images/I/816E%2BKkm7VL._AC_SL1500_.jpg",
  rating: 4.5,
  numReviews: 12,
  price: 40,
};

const ProductsList = () => {
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Product product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductsList;
