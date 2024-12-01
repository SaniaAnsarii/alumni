import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import axios from "axios";

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  // State for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [full_name, setFullName] = useState("");
  const [department, setDepartment] = useState("");
  const [user_type, setUserType] = useState(""); // Always present
  const [batch, setBatch] = useState("");

  // Toggle between sign-in and sign-up forms
  const toggleSignIn = () => {
    setIsSignUpForm(!isSignUpForm);

    // Clear fields specific to Sign-Up when switching
    if (!isSignUpForm) {
      setFullName("");
      setDepartment("");
      setBatch("");
    }
  };

  // Form submission logic
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate email and password
    const message = checkValidData(email, password);
    setErrorMessage(message);

    // Stop if validation fails
    if (message) return;

    const payload = {
      email,
      password,
      user_type, // Always include userType in the payload
    };

    if (isSignUpForm) {
      // Add additional fields for Sign-Up
      Object.assign(payload, { full_name, department, batch });
    }

    const endpoint = isSignUpForm
      ? "http://localhost:8008/api/auth/register"
      : "http://localhost:8008/api/auth/login";

    axios
      .post(endpoint, payload)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("token", res.data.token);
          navigate("/");
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        console.error(err);
        alert(`${isSignUpForm ? "Sign up" : "Sign in"} failed`);
      });
  };

  return (
    <div>
      <Header />
      <div className="relative w-screen h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src="https://gecbsp.ac.in/wp-content/uploads/2020/12/sl1.png"
          alt="Background"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10171f] to-[#081b30] opacity-70"></div>

        {/* Main Content */}
        <div className="absolute text-center w-full text-white transition-opacity duration-1000 opacity-100">
          <form
            onSubmit={handleSubmit}
            className="w-3/12 mt-10 p-8 bg-[#ecdede78] backdrop-blur-sm bg-opacity-70 rounded-lg mx-auto"
          >
            <h2 className="font-bold text-2xl mb-4">{isSignUpForm ? "Sign Up" : "Sign In"}</h2>

            {/* User Type Dropdown */}
            <select
              id="userType"
              className="w-full my-2 p-2 bg-white text-black rounded"
              value={user_type}
              onChange={(e) => setUserType(e.target.value)}
              required
            >
              <option value="" disabled hidden>
                {isSignUpForm ? "Select Sign Up As" : "Select Login Type"}
              </option>
              <option value="alumni">Alumni</option>
              <option value="student">Student</option>
            </select>

            {/* Sign-Up Specific Fields */}
            {isSignUpForm && (
              <>
                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={full_name}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your batch"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={batch}
                  onChange={(e) => setBatch(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your department"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  required
                />
                <input
                  type="date"
                  placeholder="Date of Birth"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  required
                />
                <div className="flex items-center justify-between my-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="male"
                      className="mr-2"
                      required
                    />
                    Male
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="female"
                      className="mr-2"
                      required
                    />
                    Female
                  </label>
                </div>
              </>
            )}

            {/* Email and Password Fields */}
            <input
              type="email"
              placeholder="Email Address"
              className="p-2 my-2 w-full bg-white text-black rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 my-2 w-full bg-white text-black rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-500 font-semibold my-2">{errorMessage}</p>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="p-2 my-4 bg-red-700 w-full rounded-lg text-white font-semibold"
            >
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </button>

            {/* Toggle Sign In/Sign Up */}
            <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
              {isSignUpForm
                ? "Already registered? Sign In Now"
                : "New to this? Sign Up Now"}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;