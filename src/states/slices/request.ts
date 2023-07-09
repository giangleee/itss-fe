import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Request } from "../../types";
type RequestState = {
  requests: Request[];
  selectedRequest: Request | null;
  isLoading: boolean;
};
const requestSlice = createSlice({
  name: "auth",
  initialState: {
    requests: [],
    selectedRequest: null,
    isLoading: false,
  } as RequestState,
  reducers: {
    startLoadRequest: (state) => {
      state.isLoading = true;
    },
    endLoadRequest: (state, action: PayloadAction<Request[]>) => {
      state.requests = action.payload;
      state.isLoading = false;
    },
    selectRequest: (state, action: PayloadAction<Request>) => {
      state.selectedRequest = action.payload;
    },
  },
});
export const { endLoadRequest, selectRequest, startLoadRequest } = requestSlice.actions;
export default requestSlice.reducer;
