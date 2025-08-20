import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.scss";
import LoginLogo from "../../assets/taxgreen.png";
import ButtonLoading from "../../Components/ButtonLoading/ButtonLoading";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/token/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
        localStorage.setItem("isAuthenticated", "true");
        console.log("Fetch uğurla edildi");
        navigate("/admin");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="loginPage">
      <div className="loginContainer">
        <div className="loginHeader">
          <img src={LoginLogo} alt="Company Logo" className="companyLogo" />
          <h1 className="loginTitle">Tacs Admin</h1>
          <p className="loginSubtitle">Secure access to your admin panel</p>
        </div>
        <form className="loginForm" onSubmit={handleSubmit}>
          <div className="formGroup">
            <label className="formLabel" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="formInput"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>
          <div className="formGroup">
            <label className="formLabel" htmlFor="password">
              Password
            </label>
            <div className="passwordContainer">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                className="formInput passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                required
              />
              <span
                className="passwordToggle"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          {error && <p className="errorMessage">{error}</p>}
          <button
            type="submit"
            className="loginButton"
            disabled={isLoading} // Yükleme sırasında butonu devre dışı bırak
          >
            {isLoading ? <ButtonLoading /> : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
