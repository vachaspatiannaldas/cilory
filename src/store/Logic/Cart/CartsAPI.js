import { PrivateRoute } from "../../../Services/Axiosservices";

export function AddToCartAPI(id, size) {
  return PrivateRoute.post("/addtocart", { product: id, size: size });
}
export function GetCartItems(id, size, qty) {
  return PrivateRoute.post("/getcart", {
    productid: id,
    size: size,
    quantity: qty,
  });
}

export function DeleteCartItemAPI(id, size) {
  return PrivateRoute.post("deletecartproduct", { productid: id, size: size });
}
