import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import SignUp from "./SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Typography, Box } from "@mui/material";
import { sociallogin } from './service/ApiService';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center" style={{ textDecoration: "none", color: "#3156F2" }}>
      {"Copyright © "}
      <a style={{ textDecoration: "none", color: "#2196F3" }} target="_blank" href="https://github.com/byeongseokim" rel="noreferrer">byeongseok</a>, {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function AppRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="socialLogin" element={<socialLogin />} />
        </Routes>
      </BrowserRouter>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
};

export default AppRouter;
