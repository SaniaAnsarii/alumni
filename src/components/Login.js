import React, { useState, useEffect } from 'react';
import Header from './Header';

const Login = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Trigger fade-out after 2 seconds
    const fadeOutTimer = setTimeout(() => setFadeOut(true), 2000);

    // Show main content after fade-out transition (2.5 seconds for a smooth effect)
    const showContentTimer = setTimeout(() => setShowWelcome(false), 2500);

    // Clean up timers on component unmount
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(showContentTimer);
    };
  }, []);

  return (
   <div>
{!showWelcome && (
        <div>
        <Header/>
        </div>
      )}
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
          {/* Header */}
          <h1 className="text-4xl font-bold text-slate-200 mb-6">Alumni Association</h1>

          {/* Login Form */}
          <form className="w-3/12 p-8 bg-white bg-opacity-70 rounded-lg mx-auto">
            <h2 className="font-bold text-2xl mb-4">Sign Up</h2>
            <input type="text" placeholder="Email Address" className="p-4 my-2 w-full bg-white-700 text-black rounded" />
            <input type="password" placeholder="Password" className="p-4 my-2 w-full bg-white-700 text-black rounded" />
            <button className="p-4 my-4 bg-red-700 w-full rounded-lg text-white font-semibold">
              Sign Up
            </button>
          </form>
        </div>
      )}
    </div>
      </div>
  );
};

export default Login;
