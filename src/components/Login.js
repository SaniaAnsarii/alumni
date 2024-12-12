import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    isSignUpForm: true,
    email: "",
    password: "",
    full_name: "",
    department: "",
    user_type: "",
    batch: "",
    gender: "",
    errorMessage: null,
  });

  const navigate = useNavigate();

  let debounceTimer;

  const validateField = (field, value) => {
    const currentYear = new Date().getFullYear();
    switch (field) {
      case "email":
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Invalid email address";
        }
        break;
      case "password":
        if (
          !/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*]).{8,}$/.test(
            value
          )
        ) {
          return "Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character.";
        }
        break;
      case "batch":
        if (value < 1964 || value > currentYear) {
          return "Batch number must be 4 digits between 1964 and the current year.";
        }
        break;
      default:
        break;
    }
    return null;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    clearTimeout(debounceTimer);

    debounceTimer = setTimeout(() => {
      const error = validateField(name, value);
      setFormData((prevState) => ({
        ...prevState,
        errorMessage: error,
      }));
    }, 2000);
  };

  const toggleSignIn = () => {
    setFormData((prevState) => ({
      ...prevState,
      isSignUpForm: !prevState.isSignUpForm,
      full_name: "",
      department: "",
      batch: "",
      gender: "",
      errorMessage: null,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      email,
      password,
      user_type,
      isSignUpForm,
      full_name,
      department,
      batch,
      gender,
    } = formData;

    if (
      !validateField("email", email) &&
      !validateField("password", password)
    ) {
      const payload = {
        email,
        password,
        user_type,
        ...(isSignUpForm && { full_name, department, batch, gender }),
      };

      const endpoint = isSignUpForm
        ? "http://localhost:8000/api/auth/signup"
        : "http://localhost:8000/api/auth/signin";

      axios
        .post(endpoint, payload)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("authToken", res.data.token);
            navigate("/");
          }
          if (res.status === 201) {
            setFormData((prevState) => ({
              ...prevState,
              isSignUpForm: !prevState.isSignUpForm,
              email: "",
    password: "",
            }));
          } else {
            alert(res.data.message);
          }
        })
        .catch((err) => {
          console.error(err);
          alert(`${isSignUpForm ? "Sign up" : "Sign in"} failed`);
        });
    } else {
      setFormData((prevState) => ({
        ...prevState,
        errorMessage:
          "Please correct the highlighted fields before submitting.",
      }));
    }
  };

  const {
    isSignUpForm,
    email,
    password,
    full_name,
    department,
    user_type,
    batch,
    gender,
    errorMessage,
  } = formData;

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
        <div className="absolute z-20 text-center w-full text-white transition-opacity duration-1000 opacity-100">
          <form
            onSubmit={handleSubmit}
            className="w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mt-10 p-6 sm:p-8 bg-[#ecdede78] backdrop-blur-sm bg-opacity-70 rounded-lg mx-auto"
          >
            <h2 className="font-bold text-2xl mb-4">
              {isSignUpForm ? "Sign Up" : "Sign In"}
            </h2>

            {/* User Type Dropdown */}

            {/* Sign-Up Specific Fields */}
            {isSignUpForm && (
              <>
                <select
                  name="user_type"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={user_type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    {isSignUpForm ? "Select Sign Up As" : "Select Login Type"}
                  </option>
                  <option value="alumni">Alumni</option>
                  <option value="student">Student</option>
                </select>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Enter Your Full Name"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={full_name}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="number"
                  name="batch"
                  placeholder="Enter your batch (e.g., 2018)"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={batch}
                  onChange={handleInputChange}
                  required
                />
                <select
                  name="department"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={department}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select Department
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="ET&T">ET&T</option>
                  <option value="Mining Engineering">Mining Engineering</option>
                </select>
                <select
                  name="gender"
                  className="w-full my-2 p-2 bg-white text-black rounded"
                  value={gender}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </>
            )}

            {/* Email and Password Fields */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="p-2 my-2 w-full bg-white text-black rounded"
              value={email}
              onChange={handleInputChange}
              required
            />
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="p-2 my-2 w-full bg-white text-black rounded"
                value={password}
                onChange={handleInputChange}
                required
              />
              <div
                className="absolute top-4 right-2 cursor-pointer text-gray-600"
                title="Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character."
              >
                ℹ️
              </div>
            </div>

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
