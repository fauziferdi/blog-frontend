import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: null,
  loading: false,
  error: false,
};

const userTes = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.users = action.payload;
    },
    logoutUser: (state) => {
      state.users = null;
    },
  },
});

export const { loginUser, logoutUser } = userTes.actions;
export default userTes.reducer;
