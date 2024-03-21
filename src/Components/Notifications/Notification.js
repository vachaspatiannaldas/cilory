import React from "react";
import "../../Style/Notification.css";
import { useDispatch } from "react-redux";
import { SetNotification } from "../../store/Logic/NotificationSlice";
function Notification({ children }) {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(SetNotification({ status: false, message: undefined }));
  }, 4000);
  return (
    <div className="Notification-section">
      <div className="notify">{children}</div>
    </div>
  );
}

export default Notification;
