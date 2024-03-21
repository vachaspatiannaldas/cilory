import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  AddToCartAPI,
  DeleteCartItemAPI,
  GetCartItems,
} from "../Cart/CartsAPI";
export const AddToCartItem = createAsyncThunk(
  "addtocart",
  async ({ id, size }, thunkAPI) => {
    try {
      await AddToCartAPI(id, size);
      const data = await GetCartItems();

      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
export const GetCartData = createAsyncThunk(
  "getcartitem",
  async ({ id, size, qty }, thunkAPI) => {
    try {
      const response = await GetCartItems(id, size, qty);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
export const DeleteCartItem = createAsyncThunk(
  "deletcart",
  async ({ id, size }, thunkAPI) => {
    try {
      const response = await DeleteCartItemAPI(id, size);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
const serialize = (object) => {
  const { products, summery } = object;
  if (products) {
    return {
      loader: false,
      updateloader: false,
      cartItems: products.cartitem,
      summery: {
        total: summery.total,
        subtotal: summery.cartvalue,
        discount: summery.total - summery.cartvalue,
      },
      count: products.cartitem.length,
    };
  } else {
    return {
      loader: false,
      updateloader: false,
      cartItems: [],
      summery: {
        total: 0,
        subtotal: 0,
        discount: 0,
      },
      count: 0,
    };
  }
};
const cartsSlice = createSlice({
  name: "cart",
  initialState: {
    loader: true,
    count: 0,
    cartItems: [],
    summery: { subtotal: 0, total: 0, discount: 0 },
    updateloader: false,
    error: false,
    messege: undefined,
    success: false,
  },
  reducers: {
    ResetData: (state, action) => {
      return {
        ...state,
        count: 0,
        cartItems: [],
        summery: { subtotal: 0, total: 0, discount: 0 },
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(AddToCartItem.pending, (state, action) => {
      return { ...state, updateloader: true };
    });
    builder.addCase(GetCartData.pending, (state, action) => {
      return { ...state, updateloader: true };
    });
    builder.addCase(DeleteCartItem.pending, (state, action) => {
      return { ...state, updateloader: true };
    });
    builder.addCase(AddToCartItem.fulfilled, (state, action) => {
      const result = serialize(action.payload);
      return {
        ...state,
        ...result,
      };
    });
    builder.addCase(GetCartData.fulfilled, (state, action) => {
      const result = serialize(action.payload);
      return { ...state, ...result };
    });

    builder.addCase(DeleteCartItem.fulfilled, (state, action) => {
      const result = serialize(action.payload);
      return { ...state, ...result };
    });
    builder.addCase(AddToCartItem.rejected, (state, action) => {
      return {
        ...state,
        loader: true,
        error: true,
        messege: " add to cart failed",
      };
    });
    builder.addCase(GetCartData.rejected, (state, action) => {
      return {
        ...state,
        loader: true,
        error: true,
        messege: "cart item fetch failed",
      };
    });
    builder.addCase(DeleteCartItem.rejected, (state, action) => {
      return {
        ...state,
        loader: true,
        error: true,
        messege: "delete cart item failed",
      };
    });
  },
});
export const { ResetData } = cartsSlice.actions;
export default cartsSlice;
