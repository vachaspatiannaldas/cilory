import React, { useCallback, useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Button,
  Form,
  Modal,
  Image,
} from "react-bootstrap";
import Size from "../Components/Notifications/Size";
import "../Style/Productdetail.css";
import { useParams } from "react-router-dom";
import Skeleton from "../Components/Notifications/Skeleton";
import { useDispatch, useSelector } from "react-redux";
import { AddToCartItem } from "../store/Logic/Cart/CartsSlice";
import { GetProductDetail } from "../store/Logic/ProductDetailSlice";
import { useNavigate } from "react-router-dom";
import { SetNotification } from "../store/Logic/NotificationSlice";

function ProductDetail() {
  const product = useSelector((state) => {
    return state.ProductDetail;
  });

  const isAuthenticated = useSelector((state) => {
    return state.User.isAuthenticated;
  });
  const dispatch = useDispatch();
  const [pincode, setpincode] = React.useState(undefined);
  const [size, setsize] = React.useState(false);
  const [SizeNotification, SetSizeNotification] = React.useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const handlePinCode = (e) => {
    e.preventDefault();
    console.log(pincode);
  };
  const settingsize = (e) => {
    setsize(e.target.value);
  };
  const scrollimageLeft = () => {
    const width = document.querySelector(".productimagerow .px-1").offsetWidth;
    document
      .getElementById("productimagerow")
      .scrollBy({ left: -width, behavior: "smooth" });
  };
  const scrollimageRight = () => {
    const width = document.querySelector(".productimagerow .px-1").offsetWidth;
    document
      .getElementById("productimagerow")
      .scrollBy({ left: width, behavior: "smooth" });
  };
  const addtocart = async (id) => {
    if (!size) {
      if (window.innerWidth < 400) {
        SetSizeNotification(true);
      } else {
        dispatch(
          SetNotification({ status: true, message: "please select size" })
        );
      }
    } else {
      SetSizeNotification(false);
      if (isAuthenticated) {
        const response = await dispatch(AddToCartItem({ id: id, size: size }));
        if (response.meta.requestStatus === "fulfilled") {
          dispatch(
            SetNotification({ status: true, message: "add to cart success" })
          );
        }
      } else {
        navigate("/user/login");
      }
    }
  };
  const FetchProductDetail = useCallback(() => {
    dispatch(GetProductDetail({ id: id }));
  }, [id, dispatch]);
  useEffect(() => {
    FetchProductDetail();
  }, [FetchProductDetail]);
  return (
    <div>
      <Container fluid>
        {product.loader ? (
          <Skeleton></Skeleton>
        ) : (
          <>
            {product?.product?.map((item) => {
              return (
                <div key={item._id}>
                  <Row>
                    <Col xs={12} lg={7} style={{ position: "relative" }}>
                      <Row
                        lg={2}
                        className="productimagerow"
                        id="productimagerow"
                      >
                        {item.images.map((i, index) => {
                          return (
                            i.src && (
                              <Col
                                className="mb-1 px-1"
                                xs={12}
                                lg={6}
                                key={`${i.src + index}`}
                              >
                                <Image src={i.src} className="w-100" />
                              </Col>
                            )
                          );
                        })}
                      </Row>
                      <div className="left-btn" onClick={scrollimageLeft}>
                        <i className="fa-solid fa-arrow-left"></i>
                      </div>
                      <div className="right-btn" onClick={scrollimageRight}>
                        <i className="fa-solid fa-arrow-right"></i>
                      </div>
                    </Col>

                    <Col lg={5} xs={12} className="ProductNameCol">
                      <Row>
                        <h4 className="brandName">{item.brand}</h4>
                        <div className="productName">{item.product}</div>
                      </Row>

                      <Row className="RatingCol">
                        <Col lg={"auto"} xs={"auto"} className="rating">
                          <span>4</span>
                          <span>
                            <i className="fa-solid fa-star"></i>
                          </span>
                        </Col>
                        <Col lg={"auto"} xs={"auto"} className="totalrating">
                          <span>12k Rating</span>
                        </Col>
                      </Row>
                      <hr />
                      <Row className="PriceSection">
                        <Col lg={"auto"} xs={"auto"} className="ProductPrice">
                          <span>
                            <strong>₹ {item.price}</strong>
                          </span>
                        </Col>
                        <Col lg={"auto"} xs={"auto"} className="ProductMrp">
                          <span>MRP {item.mrp}</span>
                        </Col>
                        <Col
                          lg={"auto"}
                          xs={"auto"}
                          className="ProductDiscount"
                        >
                          <span>{item.discountDisplayLabel}</span>
                        </Col>
                        <Col lg={12} className="inclusive-taxes">
                          <span>inclusive all Tax</span>
                        </Col>
                      </Row>

                      <Row className="SelectSizeSection">
                        <Col lg={12} className="SelectSizeCol">
                          <Row className="SelectSizeRow">
                            <Col lg={"auto"} xs={"auto"}>
                              Select Size
                            </Col>
                            <Col lg={"auto"} xs={"auto"}>
                              Size Chart
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Size
                            item={item}
                            settingsize={settingsize}
                            size={size}
                            phone="desktop"
                          />
                        </Col>
                      </Row>
                      <Row className="addtocartRow">
                        <Col lg={8} xs={8}>
                          <Button
                            className={`addtocart`}
                            onClick={() => {
                              addtocart(item._id);
                            }}
                          >
                            <span>Add to cart</span>
                          </Button>
                        </Col>
                        <Col>
                          <Button className="whishlist ">
                            <i className="fa-solid fa-heart"></i> WhishList
                          </Button>
                        </Col>
                      </Row>
                      <hr />
                      <Row className="ProductdeliveryOption">
                        <h4>
                          Delivery Option<i className="fa-solid fa-truck"></i>
                        </h4>
                        <Form onSubmit={handlePinCode}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Control
                              type="number"
                              placeholder="Pincode"
                              value={pincode}
                              onChange={(e) => setpincode(e.target.value)}
                            />
                            <Button variant="primary" type="submit">
                              check
                            </Button>
                          </Form.Group>
                        </Form>
                        <p>
                          Please enter PIN code to check delivery time & Pay on
                          Delivery Availability
                        </p>
                      </Row>

                      <Row>
                        <Col>
                          <p>100% Original Products</p>
                          <p>Pay on delivery might be available</p>
                          <p>Easy 30 days returns and exchanges</p>
                          <p>Try & Buy might be available</p>
                        </Col>
                      </Row>
                      <Row className="bestOffers">
                        <h4>best Offers</h4>
                        <p>This product is already at its best price</p>
                      </Row>
                      <hr />
                      <Row className="ProductDetails">
                        <Col lg={12}>
                          <h4>PRODUCT DETAILS </h4>
                          <p>{item.product}</p>
                        </Col>
                        <Col lg={12}>
                          <h4>Size Fit</h4>
                          <p>The model (height 6) is wearing a size M</p>
                        </Col>
                        <Col lg={12}>
                          <h4>Material & Care</h4>
                          <p>Material: 52% Cotton 48% Polyester</p>
                          <p>Machine Wash</p>
                        </Col>
                      </Row>
                      <Row className="specificationRow">
                        <h4>Specifications</h4>
                        <Col lg={6} xs={6}>
                          <div className="key">Length</div>
                          <div className="value">Regular</div>
                        </Col>
                        <Col lg={6} xs={6}>
                          <div className="key">Length</div>
                          <div className="value">Regular</div>
                        </Col>
                        <Col lg={6} xs={6}>
                          <div className="key">Length</div>
                          <div className="value">Regular</div>
                        </Col>
                        <Col lg={6} xs={6}>
                          <div className="key">Length</div>
                          <div className="value">Regular</div>
                        </Col>
                        <Col lg={6} xs={6}>
                          <div className="key">Length</div>
                          <div className="value">Regular</div>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Modal
                    show={SizeNotification}
                    onHide={() => SetSizeNotification(false)}
                    dialogClassName="modal-100w"
                    className="sizeModel"
                    aria-labelledby="example-custom-modal-styling-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="example-custom-modal-styling-title">
                        Select Size
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Size
                        item={item}
                        settingsize={settingsize}
                        size={size}
                        phone="phone"
                      />
                      <div className="w-100">
                        <button
                          className="select-size-done-button btn-ripple"
                          onClick={() => addtocart(item._id)}
                        >
                          done
                        </button>
                      </div>
                    </Modal.Body>
                  </Modal>
                  ;
                </div>
              );
            })}
          </>
        )}
      </Container>
    </div>
  );
}

export default ProductDetail;
