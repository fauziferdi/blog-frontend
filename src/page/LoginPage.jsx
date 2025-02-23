import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../redux/slices/userSlice";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please fill in all fields");
      return;
    }
    dispatch(loginUser({ email, password }));
    navigate("/");
  };

  const handleGoogleLogin = () => {
    // Redirect ke URL login Google backend
    window.location.href = "http://localhost:8080/auth/google/login";
  };

  // useEffect untuk menangani callback setelah login Google
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      // Kirim code ke backend untuk verifikasi dan mendapatkan token
      fetch("http://localhost:8080/auth/google/callback?code=" + code) // Include the code in the request
        .then((response) => response.json())
        .then((data) => {
          if (data.token) {
            // Simpan token di localStorage atau Redux
            localStorage.setItem("token", data.token); // Contoh: localStorage
            dispatch(loginUser({ token: data.token, provider: "google" })); // Dispatch action login dengan token dan provider
            navigate("/");
          } else {
            console.error(
              "Error during Google login:",
              data.message || "Token not received"
            );
            // Handle error, misalnya dengan menampilkan pesan ke user
            alert("Login with Google failed. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during Google login:", error);
          alert("Login with Google failed. Please try again.");
        });
    }
  });
  return (
    <div className="flex items-center justify-center h-screen px-5 bg-gray-100 sm:px-0">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="mb-4 text-2xl font-semibold ">Welcome Back 👋</h2>
        <h3 className="text-gray-500 tetx-2xl">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </h3>
        <form onSubmit={handleLogin} className="py-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block mb-2 font-bold text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block mb-2 font-bold text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="At least 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-end mb-4">
            <a className="text-sm text-blue-700" href="#">
              Forgot Passoword
            </a>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white rounded-lg bg-slate-900 hover:bg-slate-800 "
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 py-2">
          <hr class="border-t-2 border-t-slate-400 w-24" />
          <h2 className="text-sm text-slate-400">Or</h2>
          <hr class="border-t-2 border-t-slate-400 w-24" />
        </div>

        <div className="mt-6">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center w-full px-4 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 "
          >
            <img
              src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
              alt=""
              className="w-8 h-8"
            />
            <span>Sign in with Google</span>
          </button>
        </div>

        <div className="mt-8 text-center">
          <p>
            Don't have an account?
            <span className="text-blue-600 ms-1">
              <a href="/">Sign up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
