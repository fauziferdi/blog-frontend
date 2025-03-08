import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
const token = localStorage.getItem("token");

const initialState = {
  data: jwtDecode(token),
  token: token,
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        return rejectWithValue("Username atau password salah.");
      } else {
        return rejectWithValue("Terjadi kesalahan. Silakan coba lagi nanti.");
      }
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ username, password, email, name }, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        username,
        password,
        email,
        name,
      });
      return response.data;
    } catch (error) {
      if (error.response.status === 401) {
        return rejectWithValue("Username atau password salah.");
      } else {
        return rejectWithValue("Terjadi kesalahan. Silakan coba lagi nanti.");
      }
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      console.log(localStorage.getItem("token"));
      localStorage.removeItem("token");
      console.log(localStorage.getItem("token"));
    },
    checkUSer(state) {
      if (state.token) {
        try {
          const decodedToken = jwtDecode(state.token);
          console.log(decodedToken);
          //Anda bisa menggunakan informasi decodedToken untuk update state user.
        } catch (error) {
          console.error("Token tidak valid:", error);
          //Tindakan jika token tidak valid.
        }
      } else {
        console.log("Token tidak tersedia");
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.token;
        state.data = jwtDecode(action.payload.token);
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.data = jwtDecode(action.payload.token);
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout, checkUSer } = userSlice.actions;

export default userSlice.reducer;
