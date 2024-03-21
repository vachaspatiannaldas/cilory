import { instance } from "../../Services/Axiosservices";

export const FetchProductDetail = (id) => {
  return instance.post(`/product/${id}`);
};
