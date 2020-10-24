import React from "react";
import { Row, Col, Spinner, Alert } from "react-bootstrap";
import axios from "axios";
import { useQuery } from "react-query";
import Product from "./Product";

const getProduct = async () => {
  const { data } = await axios.get("http://localhost:1337/products");
  return data;
};

const ProductsList = () => {
  const { data, isLoading, isError } = useQuery("product", getProduct);

  if (isLoading)
    return (
      <Spinner
        animation="border"
        role="status"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
        }}
      >
        <span className="sr-only">Loading...</span>
      </Spinner>
    );

  if (isError) {
    return <Alert variant="danger">Error, Can't fetch the data</Alert>;
  }
  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {data.map((val, key) => {
          return (
            <Col key={key} sm={12} md={6} lg={4} xl={3}>
              <Product product={val} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductsList;
