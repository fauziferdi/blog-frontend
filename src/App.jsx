import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import NavbarComponent from "./component/NavbarComponent";
import LoginPage from "./page/LoginPage";
import SignUpPage from "./page/SignUpPage";
import DirectPage from "./page/DirectPage";
import CategoryPage from "./page/CategoryPage";
import ProtectedRoute from "./component/ProtectedRoute";
import ProfilePage from "./page/ProfilePage";
import DetailBlogPage from "./page/DetailBlogPage";
import WriteBlogPage from "./page/WriteBlogPage";

const App = () => {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<HomePage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/login/direct" element={<DirectPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/blog" element={<DetailBlogPage />} />
          <Route path="/writeblog" element={<WriteBlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
