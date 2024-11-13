import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import { checkValidData } from '../utils/validate';

const Login = () => {
  const [isSignUpForm, setIsSignUpForm] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Validation references
  const email = useRef(null);
  const password = useRef(null);

  // Toggle sign-in/sign-up
  const toggleSignIn = () => {
    setIsSignUpForm(!isSignUpForm);
  };

  // Validation check on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.current && password.current) {
      const message = checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
    }
  };

  // Animation
  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 2000);
    const showContentTimer = setTimeout(() => setShowWelcome(false), 2500);

    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(showContentTimer);
    };
  }, []);

  return (
    <div>
      {!showWelcome && <Header />}
      <div className="relative w-screen h-screen flex items-center justify-center">
        {/* Background Image */}
        <img
          className="w-full h-full object-cover"
          src="https://gecbsp.ac.in/wp-content/uploads/2020/12/sl1.png"
          alt="Background"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#485563] to-[#29323c] opacity-70"></div>

        {/* Welcome Message */}
        {showWelcome && (
          <div
            className={`absolute text-center text-5xl font-bold text-slate-200 transition-opacity duration-500 ${
              fadeOut ? 'opacity-0' : 'opacity-100'
            }`}
          >
            Welcome to the Alumni Association Platform
          </div>
        )}

        {/* Main Content */}
        {!showWelcome && (
          <div className="absolute text-center w-full text-white transition-opacity duration-1000 opacity-100">
            <form
              onSubmit={handleSubmit}
              className="w-3/12 mt-10 p-8 bg-white bg-opacity-70 rounded-lg mx-auto"
            >
              <h2 className="font-bold text-2xl mb-4">{isSignUpForm ? "Sign Up" : "Sign In"}</h2>
              <select
                id="userType"
                className="w-full my-2 p-4 bg-white text-black rounded"
              >
                <option value="" disabled selected>
                  Select Sign Up As
                </option>
                <option value="alumni">Alumni</option>
                <option value="student">Student</option>
              </select>
              {isSignUpForm &&(<input
                type="text"
                placeholder="Enter Your Full Name"
                className="w-full my-2 p-4 bg-white text-black rounded"
              />)}
              <input
                ref={email}
                type="text"
                placeholder="Email Address"
                className="p-4 my-2 w-full bg-white text-black rounded"
              />
              <input
                ref={password}
                type="password"
                placeholder="Password"
                className="p-4 my-2 w-full bg-white text-black rounded"
              />
              {errorMessage && (
                <p className="text-red-500 font-semibold my-2">{errorMessage}</p>
              )}
              <button
                type="submit"
                className="p-4 my-4 bg-red-700 w-full rounded-lg text-white font-semibold"
              >
                {isSignUpForm ? "Sign Up" : "Sign In"}
              </button>
              <p className="py-4 cursor-pointer" onClick={toggleSignIn}>
                {!isSignUpForm
                  ? "New to this? Sign Up Now"
                  : "Already registered? Sign In Now"}
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
