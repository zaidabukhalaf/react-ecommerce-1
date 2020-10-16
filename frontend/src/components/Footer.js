import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="copyright__wrapper py-2">
      <Container>
        <Row>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="copyright">
              <div className="copy__right__inner text-left">
                <p>
                  Copyright <i className="fa fa-copyright"></i>{" "}
                  <a href="">E-Commerce.</a> All Rights Reserved
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="payment text-right">
              <img src="assets/icons/payment.png" alt="" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
