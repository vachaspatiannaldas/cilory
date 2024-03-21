import { PrivateRoute } from "../../../Services/Axiosservices";

export function GetUserInfoAPI() {
  return PrivateRoute.get("/getuserinfo");
}

export function UpdateAddressAPI(item) {
  return PrivateRoute.put("/updateaddress", item);
}

export function DeleteAddressAPI(id) {
  return PrivateRoute.put("/deleteaddress", { id });
}
export function GetUserOrdersAPI() {
  return PrivateRoute.get("/getorderproduct");
}
