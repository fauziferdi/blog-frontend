import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import LoginPage from "./page/LoginPage";
import { useSelector } from "react-redux";

const App = () => {
  const { users } = useSelector((state) => state.user);
  console.log(users);
  return (
    <Router>
      {users && <NavbarComponent />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
};

export default App;
