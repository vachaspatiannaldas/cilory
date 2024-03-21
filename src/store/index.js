import { configureStore } from "@reduxjs/toolkit";
import AccountSlice from "./Logic/Account/AccountSlice";
import cartsSlice from "./Logic/Cart/CartsSlice";
import FilterPageSlices from "./Logic/FilterProducts/FilterSlice";
import NotificationPageSlice from "./Logic/NotificationSlice";
import ProductDetailSlice from "./Logic/ProductDetailSlice";
import UserSlice from "./Logic/User/UserSlice";
const store = configureStore(
  {
    reducer: {
      ProductDetail: ProductDetailSlice.reducer,
      AccountDetail: AccountSlice.reducer,
      User: UserSlice.reducer,
      Notification: NotificationPageSlice.reducer,
      Filter: FilterPageSlices.reducer,
      cartslic: cartsSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
