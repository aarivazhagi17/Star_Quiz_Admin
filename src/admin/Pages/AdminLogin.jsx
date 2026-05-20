import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    <div
      style={{
        textAlign: "center",
        padding: "80px"
      }}
    >

      <h1>Admin Login</h1>

      <form
        style={{ marginTop: "30px" }}
        onSubmit={handleLogin}
      >

        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
          style={{
            padding: "12px",
            width: "280px",
            marginBottom: "15px",
          }}
        />

        <br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            padding: "12px",
            width: "280px",
            marginBottom: "15px",
          }}
        />

        <br />

        <button
          type="submit"
          style={{
            padding: "12px 25px",
            background: "black",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >

          Login

        </button>

      </form>

    </div>

  );
}

export default AdminLogin;