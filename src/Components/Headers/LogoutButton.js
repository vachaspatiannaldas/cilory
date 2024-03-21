import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CheckIsAuthenticated } from "../../store/Logic/User/UserSlice";
import { ResetData } from "../../store/Logic/Cart/CartsSlice";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

import { GetUserInfo } from "../../store/Logic/Account/AccountSlice";
import { GetCartData } from "../../store/Logic/Cart/CartsSlice";
import { PrivateRoute } from "../../Services/Axiosservices";

function LogoutButton({ Desktop }) {
  const [cookie, , removeCookie] = useCookies(["user"]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLOgout = () => {
    removeCookie("user", { path: "/" });
    dispatch(CheckIsAuthenticated(false));
    dispatch(ResetData());
    navigate("/");
  };
  useEffect(() => {
    if (cookie.user) {
      PrivateRoute.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${cookie.user}`;
      dispatch(CheckIsAuthenticated(true));
      dispatch(GetCartData({ id: undefined, size: undefined, qty: undefined }));
      dispatch(GetUserInfo());
    } else {
      delete PrivateRoute.defaults.headers.common["Authorization"];
      dispatch(CheckIsAuthenticated(false));
    }
  }, [cookie.user, dispatch]);
  const userinfo = useSelector((state) => {
    return state.User;
  });
  return (
    userinfo.isAuthenticated && (
      <li className={`${Desktop ? "logout-btn-li" : "UserDetailLinks"}`}>
        <button className="logout-btn" onClick={handleLOgout}>
          <i class="fa fa-sign-out"></i> Logout
        </button>
      </li>
    )
  );
}

export default LogoutButton;
