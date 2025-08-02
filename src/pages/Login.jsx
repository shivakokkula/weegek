// src/components/Login.js
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Cookies from "js-cookie";
import constants from "../auth/constants";
import "./Login.css";

const SERVER_URL = constants.SERVER_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `${SERVER_URL}/login`,
        new URLSearchParams({
          username: email,
          password: password,
        }).toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      const token = response.data.access_token;
      Cookies.set("jwtToken", token);
      // Redirect to home page after successful login
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.detail || "Login failed");
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      const response = await axios.post(
        `${SERVER_URL}/google-login`,
        {
          token_id: credentialResponse.credential,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const token = response.data.access_token;
      Cookies.set("jwtToken", token);
      // Redirect to home page after successful Google login
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.detail || "Google login failed");
    }
  };

  const handleGoogleFailure = () => {
    setError("Google login failed");
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && (
        <p style={{ color: "red" }}>
          {typeof error === "string"
            ? error
            : error.msg || JSON.stringify(error)}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>

      <div className="google-login-btn">
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
        />
      </div>
      
      <p>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </div>
  );
};

export default Login;
