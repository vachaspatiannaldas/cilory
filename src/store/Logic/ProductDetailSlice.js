import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FetchProductDetail } from "./ProductDetailAPI";
export const GetProductDetail = createAsyncThunk(
  "ProductDetail",
  async ({ id }, thunkAPI) => {
    try {
      const response = await FetchProductDetail(id);
      return response.data.product;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);

const ProductDetailSlice = createSlice({
  name: "productdetailslice",
  initialState: {
    loader: true,
    Product: [],
    success: false,
    error: false,
    messege: undefined,
  },
  extraReducers: (builder) => {
    builder.addCase(GetProductDetail.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(GetProductDetail.fulfilled, (state, action) => {
      return {
        ...state,
        loader: false,
        product: action.payload,
        success: true,
        error: false,
        messege: "product detail fetch success",
      };
    });
    builder.addCase(GetProductDetail.rejected, (state, action) => {
      return {
        ...state,
        loader: true,
        error: true,
        messege: "product detail fetch failed",
      };
    });
  },
});
export default ProductDetailSlice;
