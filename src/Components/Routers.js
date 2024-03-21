import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import FilterPage from "../Pages/FilterPage";
import HomePage from "../Pages/HomePage";
import CheckOutPage from "../Pages/CheckOutPage";
import ProductDetail from "../Pages/ProductDetail";
import AccountPage from "../Pages/AccountPage";
import OrderDetailPage from "../Pages/OrderDetailPage";
import Login from "./User/Login";
import Signup from "./User/SignUp";
import Protectedroute from "./PrivateRoute";
import ScrollToTop from "../Utils/Scroll";
import ShopPage from "../Pages/ShopPage";

// import { instance, PrivateRoute } from "../Services/Axiosservices";
// import { CheckIsAuthenticated } from "../store/Logic/User/UserSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { useCookies } from "react-cookie";
// import { GetCartData } from "../store/Logic/CartSlice";
// import { GetUserInfo } from "../store/Logic/Account/AccountSlice";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/signup" element={<Signup />} />
              <Route path="/productDetail/:id" element={<ProductDetail />} />
              <Route
                path="/checkout/:checkout"
                element={
                  <Protectedroute auth={false}>
                    <CheckOutPage />
                  </Protectedroute>
                }
              />
              <Route
                path="/account/:slug"
                element={
                  <Protectedroute auth={false}>
                    <AccountPage />
                  </Protectedroute>
                }
              />
              <Route
                path="/oderdetail/:id"
                element={
                  <Protectedroute auth={false}>
                    <OrderDetailPage />
                  </Protectedroute>
                }
              />
              <Route path="/shop/:slug" element={<ShopPage />} />
              <Route path="/:slug" element={<FilterPage></FilterPage>} />
              <Route path="*" element={<div> Page Not Found</div>} />
            </Routes>
          </Layout>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default Routers;
