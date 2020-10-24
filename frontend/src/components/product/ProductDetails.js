import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Spinner,
  Alert,
  Form,
} from "react-bootstrap";
import Rating from "../Rating";
import { useQuery } from "react-query";
import axios from "axios";
import { useCartStore } from "../../store/states";

const getProduct = async (key, id) => {
  const { data } = await axios.get("http://localhost:1337/products/" + id);
  return data;
};
const ProductDetails = ({ match, history }) => {
  let product_id = match.params.id;
  const [qty, setQty] = useState(1);
  const addItem = useCartStore((state) => state.addItem);

  const { data, isLoading, isError } = useQuery(
    ["one_product", product_id],
    getProduct
  );

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

  const productObj = {
    id: data.id,
    name: data.name,
    price: +data.price,
    image: data.thumbnail.url,
    countInStock: data.countInStock,
    qty: +qty,
  };

  const handleCartItems = () => {
    addItem(productObj);
    // addProduct(productObj);
    history.push(`/cart/${product_id}?qty=${qty}`);
  };
  // function addProduct(cartItem) {
  //   let products = [];
  //   if (localStorage.getItem("products")) {
  //     products = JSON.parse(localStorage.getItem("products"));
  //   }
  //   const existProduct = products.find((x) => x.id === cartItem.id);
  //   if (existProduct) {
  //     products.map((x) => (x.id === existProduct.id ? cartItem : x));
  //   } else {
  //     products.push(cartItem);
  //     localStorage.setItem("products", JSON.stringify(products));
  //   }
  // }
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={8}>
          <Row>
            <Col md={12}>
              <Image
                src={`http://localhost:1337${data.thumbnail.url}`}
                alt=""
                fluid
              />
            </Col>
            <Col md={12}>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>{data.name}</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Rating value={4.5} text="12 reviews" />
                </ListGroup.Item>
                <ListGroup.Item>Price: ${data.price}</ListGroup.Item>
                <ListGroup.Item>{data.description}</ListGroup.Item>
              </ListGroup>
            </Col>
          </Row>
        </Col>

        <Col md={4}>
          <ListGroup>
            <ListGroup.Item>
              <Row>
                <Col>Price</Col>
                <Col>${data.price} </Col>
              </Row>
            </ListGroup.Item>
            {data.countInStock > 0 ? (
              <>
                <ListGroup.Item>
                  <Row>
                    <Col>status</Col>
                    <Col>in stock</Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                      >
                        {[...Array(data.countInStock).keys()].map((d) => (
                          <option key={d + 1} value={d + 1}>
                            {d + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              </>
            ) : (
              <ListGroup.Item>
                <Row>
                  <Col>status</Col>
                  <Col>Our Of Stock</Col>
                </Row>
              </ListGroup.Item>
            )}
          </ListGroup>
          <ListGroup.Item>
            <Button
              className="btn-block"
              type="button"
              size="lg"
              disabled={data.countInStock === 0}
              onClick={handleCartItems}
            >
              Add to Cart
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetails;
