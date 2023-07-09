import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";
import request from "./slices/request";

const store = configureStore({
  reducer: {
    auth,
    profile,
    request,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
