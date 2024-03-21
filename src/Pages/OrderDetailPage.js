import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Skeleton from "../Components/Notifications/Skeleton";
import { PrivateRoute } from "../Services/Axiosservices";
import { SetAlertNotification } from "../store/Logic/NotificationSlice";
import { Link } from "react-router-dom";
import "../Style/Account/orderdetail.css";
function OrderDetailPage() {
  const [OrderData, SetOrderData] = useState({});
  const [loader, setloader] = useState(true);
  const dispatch = useDispatch();
  const { id } = useParams();
  React.useEffect(() => {
    setloader(true);
    PrivateRoute.get(`/getorderdetail/${id}`)
      .then((res) => {
        if (res.data.found) {
          SetOrderData(res.data);
        }
        setloader(false);
      })
      .catch((error) => {
        dispatch(
          SetAlertNotification({
            alertStatus: true,
            AlertMesseage: "fetch order detail failed",
          })
        );
      });
  }, []);
  return (
    <Container>
      {loader ? (
        <Skeleton></Skeleton>
      ) : OrderData.found ? (
        <>
          <Row className="justify-content-center Order-detail-section-row">
            <Col xs={11} lg={10}>
              <Row className="Top-side-order-detail-section mb-4">
                <Col xs={12} lg={4} className="order-address-section">
                  <div className="order-address-heading">
                    <span>Delivery Address</span>
                  </div>
                  <div className="order-details">
                    <div className="order-detail-name">Pranav</div>
                    <div className="order-address">
                      101 a 100 Bhavani peth, Water tank Solapur - 413002,
                      Maharashtra
                    </div>
                    <div className="order-detail-phone">
                      <div>Phone Number</div>
                      <span>9049263174,</span>
                      <span>7888261848</span>
                    </div>
                  </div>
                </Col>
                <Col xs={12} lg={4} className="order-payment-section">
                  <div className="order-payment-heading">
                    <span>Payment Method</span>
                  </div>
                  <div className="order-payment-detail">
                    <div>card</div>
                    <span>0000</span>
                  </div>
                </Col>
                <Col xs={12} lg={4} className="order-summary-section">
                  <div className="order-summary-heading">
                    <span>Order summary</span>
                  </div>
                  <div className="order-summary">
                    <div>
                      <span>item subtotal</span>
                      <span>1234</span>
                    </div>
                    <div>
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div>
                      <span>Total</span>
                      <span>1000</span>
                    </div>
                    <div>
                      <span>Grand Total</span>
                      <span>10000</span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            {OrderData.orders.map((item) => {
              return (
                <>
                  <Col xs={11} lg={10} className="mb-3">
                    <Row>
                      <h5 className="expected-delivery">
                        Expected Delivery : 23/08/2080
                      </h5>
                    </Row>
                    <Row className="order-product-detail-section">
                      <Col lg={1} xs={3} className="order-product-detail-image">
                        <Image
                          className="w-100"
                          src={item.product.searchImage}
                        />
                      </Col>
                      <Col lg={2} xs={8}>
                        <div>
                          <div className="order-product-name">
                            {item.product.productName}
                          </div>
                          <div className="order-product-size">
                            Size : <span>{item.size}</span>
                          </div>
                          <div className="order-product-color mx-lg-0 mx-4">
                            Color : <span>blue</span>
                          </div>
                          <div>
                            Price : <span>1234</span>
                          </div>
                        </div>
                      </Col>
                      <Col lg={7} xs={12} className="order-tracking-section">
                        <div className="order-tracking completed">
                          <span className="is-complete"></span>
                          <p>
                            Ordered
                            <br />
                            <span>Mon, June 24</span>
                          </p>
                        </div>
                        <div className="order-tracking completed">
                          <span className="is-complete"></span>
                          <p>
                            Shipped
                            <br />
                            <span>Tue, June 25</span>
                          </p>
                        </div>
                        <div className="order-tracking">
                          <span className="is-complete"></span>
                          <p>
                            Delivered
                            <br />
                            <span>Fri, June 28</span>
                          </p>
                        </div>
                      </Col>
                      <Col lg={2} xs={12} className="order-write-review">
                        Write Review
                      </Col>
                    </Row>
                  </Col>
                </>
              );
            })}
          </Row>
        </>
      ) : (
        <>
          <Container className="cartemptysection">
            <Row className="cartempty">
              <Col xs={3}>
                <div className="cartemptyicon">
                  <svg
                    data-v-55fe24a2=""
                    fill="#ef6c00"
                    height="64"
                    viewBox="-1 -22 28 28"
                    width="64"
                  >
                    <path
                      data-v-55fe24a2=""
                      transform="scale(0.014, -0.014)"
                      d="M1757 128l35 -313q3 -28 -16 -50q-19 -21 -48 -21h-1664q-29 0 -48 21q-19 22 -16 50l35 313h1722zM1664 967l86 -775h-1708l86 775q3 24 21 40.5t43 16.5h256v-128q0 -53 37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5v128h384v-128q0 -53 37.5 -90.5t90.5 -37.5
t90.5 37.5t37.5 90.5v128h256q25 0 43 -16.5t21 -40.5zM1280 1152v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 106 -75 181t-181 75t-181 -75t-75 -181v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 159 112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5z"
                    ></path>
                  </svg>
                </div>
                <p>There are no products in your bag</p>
                <Link to={"/"}>
                  <Button className="light-btn btn-light">
                    Continue Shopping
                  </Button>
                </Link>
              </Col>
            </Row>
          </Container>
        </>
      )}
    </Container>
  );
}

export default OrderDetailPage;
