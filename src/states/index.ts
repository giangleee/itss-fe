import {
  TypedUseSelectorHook,
  useDispatch as defaultUseDispatchHook,
  useSelector as defaultUseSelectorHook,
} from "react-redux";

import { AppDispatch, RootState } from "./store";

export const useDispatch = defaultUseDispatchHook<AppDispatch>;
export const useSelector: TypedUseSelectorHook<RootState> = defaultUseSelectorHook;
export { default as store } from "./store";
export * from "./store";
export * from "./slices/auth";
