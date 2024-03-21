import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import store from "./store";
import { Provider } from "react-redux";
import Routers from "./Components/Routers";
import { CookiesProvider } from "react-cookie";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <Routers></Routers>
    </Provider>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
