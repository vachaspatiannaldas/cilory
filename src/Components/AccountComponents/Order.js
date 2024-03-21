import React from "react";
import { Col, Row, Image } from "react-bootstrap";
function Order({ i }) {
  return (
    <Row className="order-item-row align-items-center mb-3">
      <Col xs={12}>
        <div className="d-flex justify-content-between toporderinfo width80">
          <div>
            order placed : <span>23 oct 2080</span>
          </div>
          <div>
            Order ID : <span>{i._id}</span>
          </div>
        </div>
      </Col>
      <hr />
      <Col xs={3} lg={2}>
        <Image
          src={i.orders[0].product.searchImage}
          className="w-100"
          layout="responsive"
        />
      </Col>
      <Col xs={7} lg={8}>
        <div>
          <div className="order-product-name">
            {i.orders[0].product.productName}
          </div>
          <div className="order-product-price">
            price: <span>1234</span>
          </div>

          <div className="order-product-price">
            Size: <span>L</span>
          </div>
          <div className="order-product-price">
            Payment Method : <span>Cash</span>
          </div>

          <div className="expected-delivery">
            Expected delivery: 23 oct 2080
          </div>
        </div>
      </Col>
      <Col>
        <i className="fa-solid fa-chevron-right"></i>
      </Col>
    </Row>
  );
}

export default Order;
