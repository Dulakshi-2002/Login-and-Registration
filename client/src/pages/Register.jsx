

import React, { useEffect, useState } from "react";
import Image from "../assets/image.png";
import Logo from "../assets/logo.png";
import GoogleSvg from "../assets/icons8-google.svg";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa6";
import "../styles/Register.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

// Password strength indicator component
const PasswordStrengthIndicator = ({ password }) => {
  const strengthCheck = (password) => {
    let score = 0;
    if (password.length >= 8) score++;  // Check length (min 8)
    if (/[a-z]/.test(password)) score++;  // Check lowercase
    if (/[A-Z]/.test(password)) score++;  // Check uppercase
    if (/[0-9]/.test(password)) score++;  // Check number
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;  // Check special char
    return score;
  };

  const getStrengthLabel = (strength) => {
    switch (strength) {
      case 5: return "Strong";
      case 4: return "Medium";
      case 3: return "Weak";
      default: return "Very Weak";
    }
  };

  const getStrengthColor = (strength) => {
    switch (strength) {
      case 5: return "green";
      case 4: return "yellow";
      case 3: return "orange";
      default: return "red";
    }
  };

  const strength = strengthCheck(password);

  return (
    <div className="password-strength-indicator">
      <div
        className="password-strength-bar"
        style={{ width: `${(strength / 5) * 100}%`, backgroundColor: getStrengthColor(strength) }}
      ></div>
      <p style={{ color: getStrengthColor(strength) }}>{getStrengthLabel(strength)}</p>
    </div>
  );
};

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const [token, setToken] = useState(JSON.parse(localStorage.getItem("auth")) || "");
  
  // Field-specific error states
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    general: ""
  });

  // Form input values
  const [formValues, setFormValues] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    // Clear error for the field being edited
    setErrors({
      ...errors,
      [name]: ""
    });
    
    // Update password or confirmPassword state for the strength indicator
    if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const validateForm = () => {
    let tempErrors = {
      name: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
      general: ""
    };
    let isValid = true;

    // Validate each field
    if (!formValues.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formValues.lastname.trim()) {
      tempErrors.lastname = "Last name is required";
      isValid = false;
    }

    if (!formValues.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formValues.password) {
      tempErrors.password = "Password is required";
      isValid = false;
    } else if (formValues.password.length < 8) {
      tempErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    } else if (!/[A-Z]/.test(formValues.password)) {
      tempErrors.password = "Password must contain an uppercase letter";
      isValid = false;
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(formValues.password)) {
      tempErrors.password = "Password must contain a special character";
      isValid = false;
    }

    if (!formValues.confirmPassword) {
      tempErrors.confirmPassword = "Please confirm your password";
      isValid = false;
    } else if (formValues.password !== formValues.confirmPassword) {
      tempErrors.confirmPassword = "Passwords don't match";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }

    const formData = {
      username: formValues.name + " " + formValues.lastname,
      email: formValues.email,
      password: formValues.password
    };

    try {
      const response = await axios.post("http://localhost:3000/api/v1/register", formData);
      toast.success("Registration successful");
      navigate("/login");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.msg) {
        // Handle API-specific errors
        const errorMsg = err.response.data.msg;
       // Display specific backend errors as toasts
      if (errorMsg.includes("Email already in use")) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Email is already in use"
        }));
      } else {
        toast.error(errorMsg); // Shows other backend errors
      }
    } else {
      toast.error("Something went wrong. Please try again.");
    }
    }
  };

  useEffect(() => {
    if (token !== "") {
      toast.success("You are already logged in");
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className="register-main">
      <div className="register-left">
        <img src={Image} alt="" />
      </div>
      <div className="register-right">
        <div className="register-right-container">
          <div className="register-logo">
            <img src={Logo} alt="" />
          </div>
          <div className="register-center">
            <h2>Welcome to SecureConnect!</h2>
            <p>Please enter your details</p>
            {errors.general && <div className="error-message general-error">{errors.general}</div>}
            <form onSubmit={handleRegisterSubmit}>
              <div className="input-container">
                <input 
                  type="text" 
                  placeholder="Name" 
                  name="name" 
                  value={formValues.name}
                  onChange={handleInputChange}
                  className={errors.name ? "input-error" : ""}
                />
                {errors.name && <div className="error-message">{errors.name}</div>}
              </div>
              
              <div className="input-container">
                <input 
                  type="text" 
                  placeholder="Lastname" 
                  name="lastname" 
                  value={formValues.lastname}
                  onChange={handleInputChange}
                  className={errors.lastname ? "input-error" : ""}
                />
                {errors.lastname && <div className="error-message">{errors.lastname}</div>}
              </div>
              
              <div className="input-container">
                <input 
                  type="email" 
                  placeholder="Email" 
                  name="email" 
                  value={formValues.email}
                  onChange={handleInputChange}
                  className={errors.email ? "input-error" : ""}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="input-container">
                <div className="pass-input-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    className={errors.password ? "input-error" : ""}
                  />
                  {showPassword ? (
                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FaEye onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
                <PasswordStrengthIndicator password={password} />
                {errors.password && <div className="error-message">{errors.password}</div>}
              </div>
              
              <div className="input-container">
                <div className="pass-input-div">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleInputChange}
                    className={errors.confirmPassword ? "input-error" : ""}
                  />
                  {showPassword ? (
                    <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                  ) : (
                    <FaEye onClick={() => setShowPassword(!showPassword)} />
                  )}
                </div>
                {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
              </div>
              
              <div className="register-center-buttons">
                <button type="submit">Sign Up</button>
              </div>
            </form>
          </div>
          <p className="login-bottom-p">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
