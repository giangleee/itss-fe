import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
type AuthState = {
  isLoading: boolean;
  isLogin: boolean;
  user: null | User;
  error: null | string;
};
const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: true,
    isLogin: false,
    user: null,
    error: null,
  } as AuthState,
  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.isLoading = false;
      state.isLogin = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailed: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoading = false;
      state.isLogin = false;
      state.user = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
});
export const { loginFailed, loginSuccess, logout, startLogin } = authSlice.actions;
export default authSlice.reducer;
