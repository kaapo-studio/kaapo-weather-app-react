import { configureStore } from "@reduxjs/toolkit";

import userReducer from "@/lib/slices/userSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: true,
});
