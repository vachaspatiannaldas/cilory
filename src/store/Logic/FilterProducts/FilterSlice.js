import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FilterProductsAPI } from "./FilterAPI";

export const ProductListData = createAsyncThunk(
  "fetchproducts",
  async ({ url }, thunkAPI) => {
    try {
      const response = await FilterProductsAPI(url);
      return response.data;
    } catch (error) {
      thunkAPI.rejectWithValue({ meseege: 400 });
    }
  }
);

const FilterPageSlices = createSlice({
  name: "FilterPageSlice",
  initialState: {
    ProductListData: [],
    FilterListData: [],
    success: false,
    loader: true,
    error: false,
    status: undefined,
    message: undefined,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ProductListData.fulfilled, (state, action) => {
      return {
        ...state,
        ProductListData: action.payload.products,
        FilterListData: action.payload.filterdata,
        success: true,
        error: false,
        message: " productlist fetch success",
        loader: false,
      };
    });
    builder.addCase(ProductListData.pending, (state, action) => {
      return {
        ...state,
        loader: true,
      };
    });
    builder.addCase(ProductListData.rejected, (state, action) => {
      return {
        ...state,
        loader: true,
        error: true,
        success: false,
        message: "Productlist fetching error",
      };
    });
  },
});
export default FilterPageSlices;
