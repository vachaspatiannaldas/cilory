import React, { useState } from "react";
import { useSelector } from "react-redux";
import Input from "./AddressData";
import { Row, Col } from "react-bootstrap";
import Address from "./address";
import Skeleton from "../Notifications/Skeleton";
function AddressList({ SelectAddress, SetSelectAddress }) {
  const [show, setshow] = useState(false);
  const Addressdata = useSelector((state) => {
    return state.AccountDetail;
  });

  return Addressdata.loader ? (
    <Skeleton></Skeleton>
  ) : (
    <Row className="justify-content-around">
      {Addressdata.addresses.map((item, index) => {
        return (
          <Address
            item={item}
            key={index}
            SelectAddress={SelectAddress}
            SetSelectAddress={SetSelectAddress}
          />
        );
      })}
      <Col lg={5} xs={12} key={"1"} className={`new-address`}>
        <button onClick={() => setshow(true)}>
          <i className="fa-solid fa-plus"></i>
        </button>
        <span>Add New</span>
      </Col>
      {show && <Input item={{}} setshow={setshow} show={show} />}
    </Row>
  );
}

export default AddressList;
