import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  DeleteAddressAPI,
  GetUserInfoAPI,
  GetUserOrdersAPI,
  UpdateAddressAPI,
} from "./AccountAPI";
const serialize = (object) => {
  const newobject = Object.assign(
    {},
    { addresses: object.user.address, data: object.user }
  );
  delete newobject.data.address;
  return newobject;
};
export const GetUserInfo = createAsyncThunk(
  "getuserinfo",
  async (__, thunkAPI) => {
    try {
      const response = await GetUserInfoAPI();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ status: 300 });
    }
  }
);

export const UpdateAddress = createAsyncThunk(
  "updateaddress",
  async ({ item }, thunkAPI) => {
    try {
      await UpdateAddressAPI(item);
      const data = await GetUserInfoAPI();
      return data.data;
    } catch (error) {
      thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
export const DeleteAddress = createAsyncThunk(
  "deleteaddress",
  async ({ id }, thunkAPI) => {
    try {
      await DeleteAddressAPI(id);
      const data = await GetUserInfoAPI();
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);

export const GetUserOrders = createAsyncThunk(
  "getuserorders",
  async (__, thunkAPI) => {
    try {
      const response = await GetUserOrdersAPI();
      return response.data.products;
    } catch (error) {
      return thunkAPI.rejectWithValue({ status: 300 });
    }
  }
);

const AccountSlice = createSlice({
  name: "account",
  initialState: {
    data: [],
    loader: true,
    OrderData: [],
    orderloader: true,
    addresses: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(GetUserInfo.fulfilled, (state, action) => {
      const object = serialize(action.payload);
      return {
        ...state,
        data: object.data,
        addresses: object.addresses,
        loader: false,
      };
    });
    builder.addCase(UpdateAddress.fulfilled, (state, action) => {
      console.log(action.payload);
      const object = serialize(action.payload);
      return {
        ...state,
        data: object.data,
        addresses: object.addresses,
        loader: false,
      };
    });
    builder.addCase(DeleteAddress.fulfilled, (state, action) => {
      const object = serialize(action.payload);
      return {
        ...state,
        data: object.data,
        addresses: object.addresses,
        loader: false,
      };
    });
    builder.addCase(GetUserInfo.pending, (state, action) => {
      return { ...state, loader: true };
    });

    builder.addCase(UpdateAddress.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(DeleteAddress.pending, (state, action) => {
      return { ...state, loader: true };
    });
    builder.addCase(GetUserOrders.fulfilled, (state, action) => {
      return {
        ...state,
        orderloader: false,
        OrderData: action.payload,
      };
    });
  },
});
export default AccountSlice;

// export const {} = cartSlice.actions;
