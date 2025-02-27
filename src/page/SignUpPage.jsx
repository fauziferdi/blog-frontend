import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import HandleSwitchComponent from "../component/HomeComponent/HandleSwitchComponent";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [username, setUsername] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== repassword) {
      setPasswordError("Password tidak sama");
      console.log("Password tidak sama");
      return;
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen px-5 bg-gray-100 sm:px-0">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg ">
        <h2 className="mb-4 text-2xl font-semibold ">SignUp 👋</h2>
        <h3 className="text-gray-500 tetx-2xl">
          Today is a new day. It's your day. You shape it. Sign in to start
          managing your projects.
        </h3>
        <form onSubmit={handleSignUp} className="py-6">
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
              htmlFor="username"
              className="block mb-2 font-bold text-gray-700"
            >
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Example Fauzi673"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
          <div className="mb-4">
            <label
              htmlFor="repassword"
              className="block mb-2 font-bold text-gray-700"
            >
              Re Password
            </label>
            <input
              type="password"
              id="repassword"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="At least 8 characters"
              value={repassword}
              onChange={(e) => {
                setRepassword(e.target.value);
                setPasswordError("");
              }}
            />
            {passwordError && (
              <p className="text-sm text-red-500">{passwordError}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 font-bold text-white rounded-lg bg-slate-900 hover:bg-slate-800 "
          >
            Sign Up
          </button>
        </form>

        <div className="flex items-center justify-center gap-3 py-2">
          <hr className="w-24 border-t-2 border-t-slate-400" />
          <h2 className="text-sm text-slate-400">Or</h2>
          <hr className="w-24 border-t-2 border-t-slate-400" />
        </div>

        <div className="mt-6">
          <button className="flex items-center justify-center w-full px-4 py-1 rounded-lg bg-slate-200 hover:bg-slate-300 ">
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
            You have an account?
            <span className="text-blue-600 ms-1">
              <a href="/">Login</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
