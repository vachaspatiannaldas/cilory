import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
function UsercomponentPhone({ SetNavShow, NavShow }) {
  return (
    <>
      <li className="UserDetailLinks">
        <Link to="/account/overview" onClick={() => SetNavShow(!NavShow)}>
          <svg
            data-v-4577ec70=""
            fill="#2196F3"
            height="30"
            viewBox="-1 -1 26 26"
            width="30"
          >
            <path
              data-v-4577ec70=""
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
            ></path>
            <path data-v-4577ec70="" d="M0 0h24v24H0z" fill="none"></path>
          </svg>
          <span>Profile</span>
        </Link>
      </li>
      <li className="UserDetailLinks">
        <Link to="/account/overview" onClick={() => SetNavShow(!NavShow)}>
          <svg
            data-v-4577ec70=""
            viewBox="-2 -24 30 30"
            width="30"
            height="30"
            preserveAspectRatio="xMinYMax meet"
          >
            <path
              data-v-4577ec70=""
              fill="#FF5252"
              transform="scale(0.014, -0.014)"
              d="M896 -128q-26 0 -44 18l-624 602q-10 8 -27.5 26t-55.5 65.5t-68 97.5t-53.5 121t-23.5 138q0 220 127 344t351 124q62 0 126.5 -21.5t120 -58t95.5 -68.5t76 -68q36 36 76 68t95.5 68.5t120 58t126.5 21.5q224 0 351 -124t127 -344q0 -221 -229 -450l-623 -600 q-18 -18 -44 -18z"
            ></path>
          </svg>
          <span>Whishlist</span>
        </Link>
      </li>
      <li className="UserDetailLinks">
        <Link to="/checkout/cart" onClick={() => SetNavShow(!NavShow)}>
          <svg
            data-v-4577ec70=""
            viewBox="-1 -23 27 30"
            width="30"
            height="30"
            preserveAspectRatio="xMinYMax meet"
          >
            <path
              data-v-4577ec70=""
              fill="#ff9100"
              transform="scale(0.014, -0.014)"
              d="M1757 128l35 -313q3 -28 -16 -50q-19 -21 -48 -21h-1664q-29 0 -48 21q-19 22 -16 50l35 313h1722zM1664 967l86 -775h-1708l86 775q3 24 21 40.5t43 16.5h256v-128q0 -53 37.5 -90.5t90.5 -37.5t90.5 37.5t37.5 90.5v128h384v-128q0 -53 37.5 -90.5t90.5 -37.5
t90.5 37.5t37.5 90.5v128h256q25 0 43 -16.5t21 -40.5zM1280 1152v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 106 -75 181t-181 75t-181 -75t-75 -181v-256q0 -26 -19 -45t-45 -19t-45 19t-19 45v256q0 159 112.5 271.5t271.5 112.5t271.5 -112.5t112.5 -271.5z"
            ></path>
          </svg>

          <span>Cart</span>
        </Link>
      </li>
      <LogoutButton />
    </>
  );
}

export default UsercomponentPhone;
