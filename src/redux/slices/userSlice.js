import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  loading: false,
  error: false,
};

const userTes = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    loginUser: (state, action) => {
      state.users.push(action.payload);
    },
    logoutUser: (state) => {
      state.users.pop();
    },
  },
});

export const { loginUser, logoutUser } = userTes.actions;
export default userTes.reducer;
