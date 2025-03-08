import axios from "axios";
import "dotenv/config";

const api = axios.create({
  baseURL: process.env.VITE_BASE_URL,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;

export default api;
