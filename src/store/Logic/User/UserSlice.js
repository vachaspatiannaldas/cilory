import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { UserLoginAPI, UserSignupAPI } from "./UserAPI";
export const UserLogin = createAsyncThunk(
  "userlogin",
  async ({ datas }, thunkAPI) => {
    try {
      const { data } = await UserLoginAPI(datas);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
export const UserSignup = createAsyncThunk(
  "usersignup",
  async ({ datas }, thunkAPI) => {
    try {
      const { data } = await UserSignupAPI(datas);

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ messege: 300 });
    }
  }
);
const UserSlice = createSlice({
  name: "account",
  initialState: {
    isAuthenticated: false,
    loader: false,
    error: false,
    success: false,
    messege: undefined,
    signuploader: false,
    signuperror: false,
    signupsuccess: false,
    signupmessege: undefined,
  },
  reducers: {
    CheckIsAuthenticated: (state, action) => {
      return { ...state, isAuthenticated: action.payload };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(UserLogin.fulfilled, (state, action) => {
      return {
        ...state,
        messege: action.payload.messege,
        isAuthenticated: action.payload.auth || false,
        loader: false,
        success: action.payload.auth,
      };
    });
    builder.addCase(UserLogin.pending, (state, action) => {
      return { ...state, loader: true, error: false };
    });

    builder.addCase(UserLogin.rejected, (state, action) => {
      return { ...state, error: true };
    });
    builder.addCase(UserSignup.fulfilled, (state, action) => {
      return {
        ...state,
        signuploader: false,
        signupmessege: action.payload.messege,
        signupsuccess: action.payload.status,
      };
    });
    builder.addCase(UserSignup.pending, (state, action) => {
      return {
        ...state,
        signuploader: true,
        error: false,
        signupsuccess: false,
      };
    });

    builder.addCase(UserSignup.rejected, (state, action) => {
      return { ...state, error: true, signuploader: true };
    });
  },
});
export default UserSlice;
export const { CheckIsAuthenticated } = UserSlice.actions;
