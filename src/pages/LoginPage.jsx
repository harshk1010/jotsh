import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const login = () => {
    if (form.username === "testuser" && form.password === "Test123") {
      navigate("/list");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#E8EBF0",
      }}
    >
      <div
        style={{
          width: 360,
          padding: "40px 35px",
          borderRadius: 12,
          background: "white",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            marginBottom: 25,
            fontWeight: 600,
            color: "#222",
            textAlign: "center",
          }}
        >
          Login
        </h2>

        {/* Inputs Container */}
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Username */}
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: 12,
              marginBottom: 15,
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#ffffff",
              color: "#333",
              fontSize: 15,
              outline: "none",
            }}
          />

          {/* Password */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            style={{
              width: "90%",
              padding: 12,
              marginBottom: 20,
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#ffffff",
              color: "#333",
              fontSize: 15,
              outline: "none",
            }}
          />

          {/* Login Button */}
          <button
            onClick={login}
            style={{
              width: "90%",
              padding: 12,
              borderRadius: 6,
              background: "#007bff",
              color: "white",
              fontSize: 16,
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              transition: "0.25s",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0062c9")}
            onMouseOut={(e) => (e.target.style.background = "#007bff")}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
