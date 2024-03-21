import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { UpdateAddress } from "../../store/Logic/Account/AccountSlice";
import { useDispatch } from "react-redux";
import { SetAlertNotification } from "../../store/Logic/NotificationSlice";
function Input({ item, setshow, show }) {
  const dispatch = useDispatch();
  const [Input, SetInput] = useState(item);
  const submitdata = (e) => {
    e.preventDefault();
    setshow(false);
    dispatch(UpdateAddress({ item: Input })).catch((error) => {
      dispatch(
        SetAlertNotification({
          alertStatus: true,
          AlertMesseage: "Update address failed",
        })
      );
    });
  };
  const handlechange = (e) => {
    SetInput({ ...Input, [e.target.name]: e.target.value });
  };
  return (
    <Modal show={show} onHide={() => setshow(false)}>
      <Form onSubmit={submitdata}>
        <Modal.Header closeButton>
          <Modal.Title>
            {Input._id ? "Update Address" : "Add Address"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Enter Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="name"
              value={Input.name || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="address"
              value={Input.address || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter State</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="state"
              value={Input.state || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter City</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="city"
              value={Input.city || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Pincode</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="pincode"
              value={Input.pincode || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="phone"
              value={Input.phone || ""}
              onChange={handlechange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Enter Place</Form.Label>
            <Form.Control
              type="text"
              placeholder="name"
              name="place"
              value={Input.place || ""}
              onChange={handlechange}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => {
              setshow(false);
            }}
          >
            Close
          </Button>
          <Button type="submit">Save Changes</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Input;
