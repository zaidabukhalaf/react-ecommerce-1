import React, { useState } from "react";
import SweetAlert from "react-bootstrap-sweetalert";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  Alert,
} from "react-bootstrap";
import { useCartStore, useAlerts } from "../store/states";
import NoItemsInCart from "./no-items-in-cart";

const Cart = ({ history }) => {
  const [confirmationMsg, setConfirmationMsg] = useState(false);

  const { removeItem, updateItem, cart } = useCartStore();
  const { alert, showAlert, removeAlert } = useAlerts();

  const checkoutHandler = () => {
    history.push("/login?redirect=shipping");
  };

  // const removeCartItem = () => {
  //   showAlert();
  // };

  return (
    <Row>
      <Col sm={12}>
        <h4>Shopping Cart</h4>
      </Col>
      <SweetAlert
        show={confirmationMsg}
        success
        title="Good job!"
        onConfirm={() => setConfirmationMsg(false)}
      >
        You clicked the button!
      </SweetAlert>

      {cart.length === 0 ? (
        <Col sm={12}>
          <NoItemsInCart />
        </Col>
      ) : (
        <>
          <Col md={8}>
            <ListGroup variant="flush">
              {cart.map((item) => (
                <ListGroup.Item key={item.id + 1}>
                  <Row>
                    <Col md={2}>
                      <Image
                        src={`http://localhost:1337${item.image}`}
                        alt={item.name}
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2}>${item.price}</Col>
                    <Col md={2}>
                      <Form.Control
                        as="select"
                        value={item.qty}
                        onChange={(e) =>
                          updateItem(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((d) => (
                          <option key={d + 1} value={d + 1}>
                            {d + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="light"
                        type="light"
                        onClick={() => showAlert()}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </Col>
                  </Row>
                  <SweetAlert
                    show={alert}
                    warning
                    showCancel
                    confirmBtnText="Yes, delete it!"
                    confirmBtnBsStyle="danger"
                    title="Are you sure?"
                    onConfirm={() => {
                      removeItem(item.id);
                      setConfirmationMsg(true);
                    }}
                    onCancel={() => removeAlert()}
                    focusCancelBtn
                  ></SweetAlert>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h5>
                    Subtotal ({cart.reduce((acc, item) => acc + item.qty, 0)})
                    Items
                  </h5>
                  $
                  {cart
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    size="lg"
                    disabled={cart.length === 0}
                    onClick={checkoutHandler}
                  >
                    Proceed to Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </>
      )}
    </Row>
  );
};

export default Cart;
