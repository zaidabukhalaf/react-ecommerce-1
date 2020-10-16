import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
// import logo from "../../assets/icons/payment.png";

const Footer = () => {
  return (
    <div className="copyright__wrapper py-2">
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <div className="copyright">
              <div className="copy__right__inner text-left">
                <p>
                  Copyright <i className="fa fa-copyright"></i>{" "}
                  <Link to="/">E-Commerce.</Link>
                  All Rights Reserved
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12}>
            <div className="payment text-right">
              <img alt="" src={require("../../assets/icons/payment.png")} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
