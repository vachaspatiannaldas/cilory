import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../Style/Account/order.css";
import Order from "./Order";
import Skeleton from "../Notifications/Skeleton";
function OrderList({ orderdata, loader }) {
  return (
    <>
      <h4 className=" your-order-header">
        Your Orders <span>({orderdata.length})</span>
      </h4>
      <Row className="justify-content-md-start orderlistrow">
        <Col lg={12} xs={12}>
          {loader ? (
            <Skeleton />
          ) : (
            orderdata.map((i, index) => {
              return (
                <Link to={`/oderdetail/${i._id}`} key={index}>
                  <Order i={i} />
                </Link>
              );
            })
          )}
        </Col>
      </Row>
    </>
  );
}

export default OrderList;
