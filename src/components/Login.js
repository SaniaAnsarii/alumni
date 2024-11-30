import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header"; // Keep this if needed, otherwise remove.
import { checkValidData } from "../utils/validate"; // Keep this if validation is implemented.

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate();

  // Validation references
  const email = useRef(null);
  const password = useRef(null);

  // Toggle between sign-in and sign-up forms
  const toggleSignIn = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  // Validation check on form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.current && password.current) {
      // Validate input fields
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);

      // If validation passes, simulate token generation and storage
      if (!message) {
        const simulatedToken = "fake-token-12345"; // Simulated token

        // Store the token in localStorage
        localStorage.setItem("authToken", simulatedToken);

        // Navigate to the home page
        navigate("/home");
      }
    }
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
              defaultValue=""
              required
            >
              <option value="" disabled hidden>
                Select Sign Up As
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
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your batch"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  required
                />
                <input
                  type="text"
                  placeholder="Enter your department"
                  className="w-full my-2 p-2 bg-white text-black rounded"
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
              ref={email}
              type="email"
              placeholder="Email Address"
              className="p-2 my-2 w-full bg-white text-black rounded"
              required
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="p-2 my-2 w-full bg-white text-black rounded"
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
