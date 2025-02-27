import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import DirectPage from "./page/DirectPage";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login/direct" element={<DirectPage />} />
      </Routes>
    </Router>
  );
};

export default App;
