import React from "react";
import Footer from "./Footer";
import { NavigantionBar } from "./Headers/NavigantionBar";
import { useSelector } from "react-redux";
import Notification from "./Notifications/Notification";
import AlertNotification from "./Notifications/AlertNotification";
function Layout({ children }) {
  const notification = useSelector((state) => {
    return state.Notification;
  });

  return (
    <>
      <header>
        {notification.status && (
          <Notification>{notification.message}</Notification>
        )}

        <NavigantionBar></NavigantionBar>

        <AlertNotification></AlertNotification>
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Layout;
