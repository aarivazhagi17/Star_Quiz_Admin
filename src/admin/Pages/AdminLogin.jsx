import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminLogin.css";

function AdminLogin() {

  const [username, setUsername] =
    useState("");

  const [password, setPassword] =
    useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        `${import.meta.env.VITE_API_URL}/admin-login`,

        {
          username,
          password
        }

      );

      alert(response.data.message);

      if (
        response.data.message ===
        "Admin login successful"
      ) {

        localStorage.setItem(
          "token",
          response.data.token
        );

        navigate("/admin");

      }

    } catch (error) {

      console.log(error);

      alert("Login Failed");

    }

  };

  return (

    <div className="login-container">

      <div className="login-card">

        <h1 className="login-title">

          Admin Login

        </h1>

        <form onSubmit={handleLogin}>

          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
            className="login-input"
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="login-input"
          />

          <button
            type="submit"
            className="login-btn"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  );
}

export default AdminLogin;