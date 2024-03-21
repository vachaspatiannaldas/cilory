import { instance } from "../../../Services/Axiosservices";

export const FilterProductsAPI = (url) => {
  return instance.get(`/getproduct${url}`);
};
