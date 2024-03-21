import React from "react";
import "../../Style/FilterPage/Checkout/address.css";
import { Col } from "react-bootstrap";
import Input from "./AddressData";
import { DeleteAddress } from "../../store/Logic/Account/AccountSlice";
import { useDispatch } from "react-redux";
function Address({ item, SetSelectAddress, SelectAddress }) {
  const dispatch = useDispatch();
  const [show, setshow] = React.useState(false);
  return (
    <Col lg={5} xs={12} key={"1"} className={`bye-address`}>
      <div className="select-address">
        <label className={`select-address-label`}>
          <span className="home-select">{item.place}</span>
          <input
            type={"radio"}
            className={`select-address-input`}
            name="address"
            onChange={() => SetSelectAddress && SetSelectAddress(item)}
            checked={SelectAddress?._id === item?._id}
            disabled={SelectAddress === undefined}
          />

          <span className="address-detail">
            {/* <span className={focusinput}></span> */}
            <p>{item.name}</p>
            <p>
              {item.address}
              <br />
              <br />
              <span>
                {item.city}
                <br />
                {item.state}
              </span>
            </p>
            <p>
              Mobile <strong>{item.phone}</strong>
            </p>
          </span>
        </label>
      </div>
      <div className="addressdeleteedit">
        <button
          onClick={() => {
            dispatch(DeleteAddress({ id: item._id }));
          }}
        >
          Delete
        </button>
        <button
          onClick={() => {
            setshow(true);
          }}
        >
          Edit
        </button>
      </div>
      {show && <Input item={item} setshow={setshow} show={show} />}
    </Col>
  );
}

export default Address;
