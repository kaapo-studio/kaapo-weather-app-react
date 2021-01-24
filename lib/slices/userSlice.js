import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    auth: false,
    profilePopup: false,
  },
  reducers: {
    userLogIn(state) {
      state.auth = true;
    },
    userLogOut(state) {
      state.auth = false;
    },
    openProfilePopup(state) {
      state.profilePopup = true;
    },
    closeProfilePopup(state) {
      state.profilePopup = false;
    },
  },
});

export const selectUser = (state) => state.user;

export const {
  userLogIn,
  userLogOut,
  openProfilePopup,
  closeProfilePopup,
} = userSlice.actions;

export default userSlice.reducer;
