import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../Style/FilterPage/Checkout/checkout.css";
import Cart from "../Components/CheckOutComponents/cart";
//import Address from "../Components/CheckOutComponents/address";
import Payment from "../Components/CheckOutComponents/Payment";
import { useSelector } from "react-redux";

import Skeleton from "../Components/Notifications/Skeleton";
import { Link } from "react-router-dom";
//import Input from "../Components/CheckOutComponents/AddressData";
import { useDispatch } from "react-redux";
import AddressList from "../Components/CheckOutComponents/AddressList";
import { SetNotification } from "../store/Logic/NotificationSlice";
function CheckOutPage() {
  const { checkout } = useParams();

  const dispatch = useDispatch();
  const [SelectAddress, SetSelectAddress] = React.useState({});
  const navigate = useNavigate();
  const CartData = useSelector((state) => {
    return state.cartslic;
  });
  const handelnavigate = () => {
    if (checkout === "cart") {
      navigate("/checkout/address");
    } else if (checkout === "address") {
      if (Object.values(SelectAddress).length >= 1) {
        navigate("/checkout/payment");
      } else {
        dispatch(
          SetNotification({ status: true, message: "please select address" })
        );
      }
    }
  };
  return (
    <Container>
      {CartData.loader ? (
        <Skeleton></Skeleton>
      ) : CartData.cartItems.length >= 1 ? (
        <>
          {checkout === "cart" && (
            <Row>
              <h3 className="checkoutHeading">
                Shopping Bag ({CartData.count})
              </h3>
            </Row>
          )}
          {checkout === "address" && (
            <Row>
              <h3 className="checkoutHeading">Select Address</h3>
            </Row>
          )}
          {checkout === "payment" && (
            <Row>
              <h3 className="checkoutHeading">Payment</h3>
            </Row>
          )}
          <Row className="justify-content-center checkoutrow">
            {checkout === "cart" && (
              <Col lg={6} xs={12} className="cartcol">
                {CartData.cartItems.map((item, index) => {
                  return (
                    <Cart
                      key={index}
                      item={item}
                      loader={CartData.updateloader}
                    />
                  );
                })}
              </Col>
            )}
            {checkout === "address" && (
              <Col lg={6} xs={10}>
                <AddressList
                  SelectAddress={SelectAddress}
                  SetSelectAddress={SetSelectAddress}
                />
              </Col>
            )}
            {checkout === "payment" && (
              <Payment value={CartData.summery.subtotal} />
            )}
            <Col className="PriceCalculation p-4 pt-0" lg={3} xs={12}>
              <div className="PriceDeatil">
                <i className="fa-solid fa-tag"></i>
                <span>Price Detail</span>
              </div>
              <Row className="justify-content-md-center">
                <Col lg={7} xs={7} className="subtotal">
                  Subtotal
                </Col>
                <Col lg={5} xs={5} className="subtotalprice text-end">
                  ₹ {CartData.summery.total}
                </Col>
                <Col lg={7} xs={7} className="subtotal">
                  Discount
                </Col>
                <Col lg={5} xs={5} className="subtotalprice text-end">
                  -₹ {CartData.summery.discount}
                </Col>
                <Col lg={7} xs={7} className="shipping">
                  Shipping
                </Col>
                <Col lg={5} xs={5} className="shippingprice text-end">
                  Free
                </Col>
                <Col lg={7} xs={7} className="total">
                  Total<span>(Incl. of all taxes)</span>
                </Col>
                <Col lg={5} xs={5} className="totalprice text-end">
                  ₹ {CartData.summery.subtotal}
                </Col>
                {
                  <Col lg={12} xs={12} className="ByeNow">
                    <div className="ByeNowBox">
                      <div className="ByeNowtotal">
                        ₹ {CartData.summery.subtotal}
                      </div>
                      {checkout !== "payment" && (
                        <button onClick={handelnavigate}>
                          {checkout === "cart"
                            ? "proceed to Bye"
                            : checkout === "address"
                            ? "delivery here"
                            : "Bye Now"}
                        </button>
                      )}
                    </div>
                  </Col>
                }
              </Row>
            </Col>
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
export default CheckOutPage;
