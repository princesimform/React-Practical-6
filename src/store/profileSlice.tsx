import { createSlice } from "@reduxjs/toolkit";
// import { ProfileData } from "../data/userData";
import { profileSliceType } from "./store";

const ProfileInitalState = {
  profileData: {
    id: 0,
    name: "",
    email: "",
    isActive: "active",
    access: "",
    profile: "",
  },
};

export const profileSlice = createSlice({
  name: "profileSlice",
  initialState: ProfileInitalState,
  reducers: {
    setProfile(state, action) {
      state.profileData = action.payload;
    },
  },
});

export const profileAction = profileSlice.actions;
