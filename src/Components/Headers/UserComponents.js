import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../Style/NavBar/usercomponent.css";
import LogoutButton from "./LogoutButton";

function UserComponents() {
  const userinfo = useSelector((state) => {
    return state.User;
  });
  return (
    <div className="Usercomponent-section">
      <ul>
        {userinfo.isAuthenticated ? (
          <Link to={`/overview`}>
            <li>{"User Name"}</li>
          </Link>
        ) : (
          <Link to={"/user/login"}>
            <li>login / signup</li>
          </Link>
        )}
        <Link to={"/account/orders"}>
          <li> orders</li>
        </Link>
        <Link to={"/account/address"}>
          <li>saved address</li>
        </Link>
        <Link to={"/account/orders"}>
          <li>Edit prifile</li>
        </Link>
        <LogoutButton Desktop={true} />
      </ul>
    </div>
  );
}

export default UserComponents;
