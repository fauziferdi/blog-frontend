import { configureStore } from "@reduxjs/toolkit";
import userTes from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userTes,
  },
});
