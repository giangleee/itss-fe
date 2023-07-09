import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
const profileSlice = createSlice({
  name: "profile",
  initialState: {} as User,
  reducers: {
    setProfile: (_, action: PayloadAction<User>) => {
      return action.payload;
    },
    updateFullName: (state, action: PayloadAction<string>) => {
      state.fullName = action.payload;
    },
    updateEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    updatePhoneNumber: (state, action: PayloadAction<string>) => {
      state.phoneNumber = action.payload;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      state.avatar = action.payload;
    },
    updateGender: (state, action: PayloadAction<User["gender"]>) => {
      state.gender = action.payload;
    },
    updateAddress: (state, action: PayloadAction<string>) => {
      state.address = action.payload;
    },
    updateProvince: (state, action: PayloadAction<string>) => {
      state.province = action.payload;
    },
    updateDistrict: (state, action: PayloadAction<string>) => {
      state.district = action.payload;
    },
  },
});
export const {
  setProfile,
  updateAddress,
  updateAvatar,
  updateDistrict,
  updateEmail,
  updateFullName,
  updateGender,
  updatePhoneNumber,
  updateProvince,
} = profileSlice.actions;
export default profileSlice.reducer;
