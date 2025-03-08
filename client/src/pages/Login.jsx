import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  const navigate = useNavigate();
  const [errors, setErrors] = useState({ email: "", password: "", general: "" });



  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setErrors({ email: "", password: "", general: "" }); // Reset errors on new attempt

    let email = e.target.email.value;
    let password = e.target.password.value;

    if (email.length > 0 && password.length > 0) {
      const formData = {
        email,
        password,
      };
      try {
        const response = await axios.post(
          "http://localhost:3000/api/v1/login",
          formData
        );
        localStorage.setItem('auth', JSON.stringify(response.data.token));
        toast.success("Login successfull");
        navigate("/dashboard");
      }  catch (err) {
        if (err.response && err.response.data && err.response.data.msg) {
          const errorMsg = err.response.data.msg;
  
          if (errorMsg.includes("Invalid email")) {
            setErrors((prev) => ({ ...prev, email: "Invalid email or user does not exist" }));
          } else if (errorMsg.includes("Wrong password")) {
            setErrors((prev) => ({ ...prev, password: "Incorrect password. Try again." }));
          } else {
            setErrors((prev) => ({ ...prev, general: errorMsg }));
          }
        } else {
          toast.error("Something went wrong. Please try again!"); // Fallback for unexpected errors
        }
      }
    } else {
      setErrors((prev) => ({
        ...prev,
        email: email.length === 0 ? "Email is required" : "",
        password: password.length === 0 ? "Password is required" : "",
      }));
    }
  };

  useEffect(() => {
    if(token !== ""){
      toast.success("You already logged in");
      navigate("/dashboard");
    }
  }, []);

  return (
    <div className="login-main">
      <div className="login-left">
        <img src={Image} alt="" />
      </div>
      <div className="login-right">
        <div className="login-right-container">
          <div className="login-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="login-center">
            <h2>Welcome back!</h2>
            <p>Enter your username and password to log in</p>
            <form onSubmit={handleLoginSubmit}>
            <div className="input-container">
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  className={errors.password ? "input-error" : ""}
                />
                {showPassword ? (
                  <FaEyeSlash
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                ) : (
                  <FaEye
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  />
                )}
              </div>
              {errors.password && <div className="error-message">{errors.password}</div>}


              <div className="login-center-buttons">
                <button type="submit">Log In</button>
              </div>
            </form>
          </div>

          <p className="login-bottom-p">
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
