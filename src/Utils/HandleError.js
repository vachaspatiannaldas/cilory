import { SetAlertNotification } from "../store/Logic/NotificationSlice";
import { RemoveAlerts } from "../store/Logic/NotificationSlice";
import store from "../store";
export const HandleError = (Text) => {
  store.dispatch(
    SetAlertNotification({
      alertStatus: true,
      AlertMesseage: Text,
    })
  );

  setTimeout(() => {
    store.dispatch(RemoveAlerts());
  }, 4000);
};
