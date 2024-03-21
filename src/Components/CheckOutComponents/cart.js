import React from "react";
import { Col, Row, Image } from "react-bootstrap";
import "../../Style/FilterPage/Checkout/cart.css";
import { useDispatch } from "react-redux";
import { DeleteCartItem, GetCartData } from "../../store/Logic/Cart/CartsSlice";
function Cart({ item, loader }) {
  const dispatch = useDispatch();
  return (
    <>
      <Row className="cartinfo">
        <Col lg={2} xs={3} className="cartimage">
          <Image src={item.product.searchImage} className="w-100" />
        </Col>
        <Col className="cartshortinfo">
          <div>
            <div className="carttitleprice">
              <div className="cartproducttitle">{item.product.brand}</div>
              <div className="cartproductprice">
                <span> {`₹ ${item.product.price}`}</span>
              </div>
            </div>
            <div className="cartsizeColor">
              <div className="cartsize">
                <span>Size</span>
                {item.size}
              </div>
              <div className="cartcolor">
                <span>Color</span>
                {item.product.primaryColour}
              </div>
            </div>
            <div className="cartqty">
              <div>qty:</div>
              <select
                onChange={(e) =>
                  dispatch(
                    GetCartData({
                      id: item.product._id,
                      size: item.size,
                      qty: e.target.value,
                    })
                  )
                }
                disabled={loader}
                value={item.quantity}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
          </div>
          <Row className="cartwhishdelete">
            <Col className="text-center">
              <button disabled={loader}>WhishList</button>
            </Col>
            <Col className="text-center">
              <button
                disabled={loader}
                onClick={() => {
                  dispatch(
                    DeleteCartItem({ id: item.product._id, size: item.size })
                  );
                }}
              >
                {false ? (
                  <div
                    className="spinner-grow text-light spinner-grow-sm"
                    role="status"
                  ></div>
                ) : (
                  "Delete"
                )}
              </button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Cart;
