import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import profile from "./slices/profile";

const store = configureStore({
  reducer: {
    auth,
    profile,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;