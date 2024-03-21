import React from "react";
import { Alert } from "react-bootstrap";
import { useSelector } from "react-redux";

function AlertNotification() {
  const NotifyList = useSelector((state) => {
    return state.Notification.AlertList;
  });

  return (
    <>
      {NotifyList.map((i, index) => {
        return (
          <Alert key={index} variant="danger">
            {i.AlertMesseage}
          </Alert>
        );
      })}
    </>
  );
}
export default AlertNotification;
