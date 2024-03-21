import { createSlice } from "@reduxjs/toolkit";

const NotificationPageSlice = createSlice({
  name: "FilterPageSlice",

  initialState: {
    AlertList: [],
    status: false,
    message: undefined,
  },
  reducers: {
    SetNotification: (state, action) => {
      return { ...state, ...action.payload };
    },
    RemoveAlerts: (state, action) => {
      state.AlertList.shift();
    },
    SetAlertNotification: (state, action) => {
      state.AlertList.push(action.payload);
    },
  },
});
export default NotificationPageSlice;
export const { SetNotification, SetAlertNotification, RemoveAlerts } =
  NotificationPageSlice.actions;
