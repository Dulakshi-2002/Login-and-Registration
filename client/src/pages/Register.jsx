// // import React, { useEffect, useState } from "react";
// // import Image from "../assets/image.png";
// // import Logo from "../assets/logo.png";
// // import GoogleSvg from "../assets/icons8-google.svg";
// // import { FaEye } from "react-icons/fa6";
// // import { FaEyeSlash } from "react-icons/fa6";
// // import "../styles/Register.css";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const PasswordStrengthIndicator = ({ password }) => {
// //   const strengthCheck = (password) => {
// //     let score = 0;
// //     if (password.length >= 8) score++;  // Check length (min 8)
// //     if (/[a-z]/.test(password)) score++;  // Check lowercase
// //     if (/[A-Z]/.test(password)) score++;  // Check uppercase
// //     if (/[0-9]/.test(password)) score++;  // Check number
// //     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;  // Check special char
// //     return score;
// //   };

// //   const getStrengthLabel = (strength) => {
// //     switch (strength) {
// //       case 5: return "Strong";
// //       case 4: return "Medium";
// //       case 3: return "Weak";
// //       default: return "Very Weak";
// //     }
// //   };

// //   const getStrengthColor = (strength) => {
// //     switch (strength) {
// //       case 5: return "green";
// //       case 4: return "yellow";
// //       case 3: return "orange";
// //       default: return "red";
// //     }
// //   };

// //   const strength = strengthCheck(password);

// //   return (
// //     <div className="password-strength-indicator">
// //       <div
// //         className="password-strength-bar"
// //         style={{ width: `${(strength / 5) * 100}%`, backgroundColor: getStrengthColor(strength) }}
// //       ></div>
// //       <p style={{ color: getStrengthColor(strength) }}>{getStrengthLabel(strength)}</p>
// //     </div>
// //   );
// // };


// // const Login = () => {
// //   const [ showPassword, setShowPassword ] = useState(false);
// //   const navigate = useNavigate();
// //   const [ token, setToken ] = useState(JSON.parse(localStorage.getItem("auth")) || "");



// //   const handleRegisterSubmit = async (e) => {
// //     e.preventDefault();
// //     let name = e.target.name.value;
// //     let lastname = e.target.lastname.value;
// //     let email = e.target.email.value;
// //     let password = e.target.password.value;
// //     let confirmPassword = e.target.confirmPassword.value;

// //     if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

// //       if (password !== confirmPassword) {
// //         toast.error("Passwords don't match"); // ✅ Now this will show correctly
// //         return; // ❗ Prevent API request if passwords don't match
// //       }
// //       const formData = {
// //           username: name + " " + lastname,
// //           email,
// //           password
// //         };
// //         try{
// //         const response = await axios.post("http://localhost:3000/api/v1/register", formData);
// //          toast.success("Registration successfull");
// //          navigate("/login");
// //        }catch(err){
// //         if (err.response && err.response.data && err.response.data.msg) {
// //           toast.error(err.response.data.msg); // ✅ Shows only "Email already in use"       }
// //         }else{
// //         toast.error("Passwords don't match");
// //         }
// //       }
    
// //   }else{
// //       toast.error("Please fill all inputs");
// //   }


// //   }

// //   useEffect(() => {
// //     if(token !== ""){
// //       toast.success("You already logged in");
// //       navigate("/dashboard");
// //     }
// //   }, []);

// //   return (
// //     <div className="register-main">
// //       <div className="register-left">
// //         <img src={Image} alt="" />
// //       </div>
// //       <div className="register-right">
// //         <div className="register-right-container">
// //           <div className="register-logo">
// //             <img src={Logo} alt="" />
// //           </div>
// //           <div className="register-center">
// //             <h2>Welcome to our website!</h2>
// //             <p>Please enter your details</p>
// //             <form onSubmit={handleRegisterSubmit}>
// //             <input type="text" placeholder="Name" name="name" required={true} />
// //             <input type="text" placeholder="Lastname" name="lastname" required={true} />
// //               <input type="email" placeholder="Email" name="email" required={true} />
// //               <div className="pass-input-div">
// //                 <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" required={true} />
// //                 {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
// //               </div>
// //               <div className="pass-input-div">
// //                 <input type={showPassword ? "text" : "password"} placeholder="Confirm Password" name="confirmPassword" required={true} />
// //                 {showPassword ? <FaEyeSlash onClick={() => {setShowPassword(!showPassword)}} /> : <FaEye onClick={() => {setShowPassword(!showPassword)}} />}
                
// //               </div>
// //               <div className="register-center-buttons">
// //                 <button type="submit">Sign Up</button>
// //                 <button type="submit">
// //                   <img src={GoogleSvg} alt="" />
// //                   Sign Up with Google
// //                 </button>
// //               </div>
// //             </form>
// //           </div>

// //           <p className="login-bottom-p">
// //             Already have an account? <Link to="/login">Login</Link>
// //           </p>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;


// import React, { useState, useEffect } from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa6";
// import "../styles/Register.css";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// // Password strength indicator component
// const PasswordStrengthIndicator = ({ password }) => {
//   const strengthCheck = (password) => {
//     let score = 0;
//     if (password.length >= 8) score++;  // Check length (min 8)
//     if (/[a-z]/.test(password)) score++;  // Check lowercase
//     if (/[A-Z]/.test(password)) score++;  // Check uppercase
//     if (/[0-9]/.test(password)) score++;  // Check number
//     if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score++;  // Check special char
//     return score;
//   };

//   const getStrengthLabel = (strength) => {
//     switch (strength) {
//       case 5: return "Strong";
//       case 4: return "Medium";
//       case 3: return "Weak";
//       default: return "Very Weak";
//     }
//   };

//   const getStrengthColor = (strength) => {
//     switch (strength) {
//       case 5: return "green";
//       case 4: return "yellow";
//       case 3: return "orange";
//       default: return "red";
//     }
//   };

//   const strength = strengthCheck(password);

//   return (
//     <div className="password-strength-indicator">
//       <div
//         className="password-strength-bar"
//         style={{ width: `${(strength / 5) * 100}%`, backgroundColor: getStrengthColor(strength) }}
//       ></div>
//       <p style={{ color: getStrengthColor(strength) }}>{getStrengthLabel(strength)}</p>
//     </div>
//   );
// };

// const Register = () => {
//   const [showPassword, setShowPassword] = useState(false);
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const navigate = useNavigate();

//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     let name = e.target.name.value;
//     let lastname = e.target.lastname.value;
//     let email = e.target.email.value;

// <<<<<<< Updated upstream
// <<<<<<< Updated upstream
// <<<<<<< Updated upstream
//     if(name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0){

//       if(password === confirmPassword){
// =======
//     if (name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
//       if (password === confirmPassword) {
// >>>>>>> Stashed changes
// =======
//     if (name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
//       if (password === confirmPassword) {
// >>>>>>> Stashed changes
// =======
//     if (name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
//       if (password === confirmPassword) {
// >>>>>>> Stashed changes
//         const formData = {
//           username: name + " " + lastname,
//           email,
//           password
//         };
// <<<<<<< Updated upstream
// <<<<<<< Updated upstream
// <<<<<<< Updated upstream
//         try{
//         const response = await axios.post("http://localhost:3000/api/v1/register", formData);
//          toast.success("Registration successfull");
//          navigate("/login");
//        }catch(err){
//          toast.error(err.message);
//        }
//       }else{
//         toast.error("Passwords don't match");
//       }
    

//     }else{
//       toast.error("Please fill all inputs");
//     }


//   }

//   useEffect(() => {
//     if(token !== ""){
//       toast.success("You already logged in");
//       navigate("/dashboard");
// =======
//         try {
//           const response = await axios.post("http://localhost:3000/api/v1/register", formData);
//           toast.success("Registration successful");
//           navigate("/login");
//         } catch (err) {
//           toast.error("Error: " + err.response?.data?.msg || "Something went wrong");
//         }
//       } else {
//         toast.error("Passwords don't match");
//       }
//     } else {
//       toast.error("Please fill all inputs");
// >>>>>>> Stashed changes
// =======
//         try {
//           const response = await axios.post("http://localhost:3000/api/v1/register", formData);
//           toast.success("Registration successful");
//           navigate("/login");
//         } catch (err) {
//           toast.error("Error: " + err.response?.data?.msg || "Something went wrong");
//         }
//       } else {
//         toast.error("Passwords don't match");
//       }
//     } else {
//       toast.error("Please fill all inputs");
// >>>>>>> Stashed changes
// =======
//         try {
//           const response = await axios.post("http://localhost:3000/api/v1/register", formData);
//           toast.success("Registration successful");
//           navigate("/login");
//         } catch (err) {
//           toast.error("Error: " + err.response?.data?.msg || "Something went wrong");
//         }
//       } else {
//         toast.error("Passwords don't match");
//       }
//     } else {
//       toast.error("Please fill all inputs");
// >>>>>>> Stashed changes
//     }
//   };

//   return (
//     <div className="register-main">
//       <div className="register-left">
//         {/* Your image and other elements */}
//       </div>
//       <div className="register-right">
//         <div className="register-right-container">
//           <div className="register-logo">
//             {/* Your logo */}
//           </div>
//           <div className="register-center">
//             <h2>Welcome to our website!</h2>
//             <p>Please enter your details</p>
//             <form onSubmit={handleRegisterSubmit}>
//               <input type="text" placeholder="Name" name="name" required={true} />
//               <input type="text" placeholder="Lastname" name="lastname" required={true} />
//               <input type="email" placeholder="Email" name="email" required={true} />
//               <div className="pass-input-div">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Password"
//                   name="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   required
//                 />
//                 {showPassword ? (
//                   <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
//                 ) : (
//                   <FaEye onClick={() => setShowPassword(!showPassword)} />
//                 )}
//                 <PasswordStrengthIndicator password={password} />
//               </div>
//               <div className="pass-input-div">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Confirm Password"
//                   name="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                   required
//                 />
//                 {showPassword ? (
//                   <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
//                 ) : (
//                   <FaEye onClick={() => setShowPassword(!showPassword)} />
//                 )}
//               </div>
//               <div className="register-center-buttons">
//                 <button type="submit">Sign Up</button>
//               </div>
//             </form>
//           </div>
//           <p className="login-bottom-p">
//             Already have an account? <Link to="/login">Login</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;


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

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let lastname = e.target.lastname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let confirmPassword = e.target.confirmPassword.value;

    if (name.length > 0 && lastname.length > 0 && email.length > 0 && password.length > 0 && confirmPassword.length > 0) {
      if (password !== confirmPassword) {
        toast.error("Passwords don't match"); // ✅ Now this will show correctly
        return; // ❗ Prevent API request if passwords don't match
      }

      const formData = {
        username: name + " " + lastname,
        email,
        password
      };

      try {
        const response = await axios.post("http://localhost:3000/api/v1/register", formData);
        toast.success("Registration successful");
        navigate("/login");
      } catch (err) {
        if (err.response && err.response.data && err.response.data.msg) {
          toast.error(err.response.data.msg); // ✅ Shows only "Email already in use"
        } else {
          toast.error("Something went wrong");
        }
      }
    } else {
      toast.error("Please fill all inputs");
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
            <h2>Welcome to our website!</h2>
            <p>Please enter your details</p>
            <form onSubmit={handleRegisterSubmit}>
              <input type="text" placeholder="Name" name="name" required={true} />
              <input type="text" placeholder="Lastname" name="lastname" required={true} />
              <input type="email" placeholder="Email" name="email" required={true} />
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update password state
                  required={true}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
                {/* Password strength indicator */}
                <PasswordStrengthIndicator password={password} />
              </div>
              <div className="pass-input-div">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)} // Update confirmPassword state
                  required={true}
                />
                {showPassword ? (
                  <FaEyeSlash onClick={() => setShowPassword(!showPassword)} />
                ) : (
                  <FaEye onClick={() => setShowPassword(!showPassword)} />
                )}
              </div>
              <div className="register-center-buttons">
                <button type="submit">Sign Up</button>
                <button type="submit">
                  <img src={GoogleSvg} alt="" />
                  Sign Up with Google
                </button>
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
