import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ChevronDownIcon,
  ChevronUpIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState("");
  const navigate = useNavigate();

  const loginToken = localStorage.getItem("authToken");

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? "" : dropdown));
  };

  const handleMouseLeave = () => setOpenDropdown("");

  return (
    <nav className="bg-gray-800 text-white px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            className="w-12"
            src="https://abgec.in/assets/images/gecbwobg.png"
            alt="logo"
          />
          <div className="text-xl font-bold text-white">Alumni Association</div>
        </div>

        {/* Main navigation items */}
        <ul className="flex items-center gap-2 md:gap-4 text-xs md:text-base">
          {/* Home Button */}
          {/* <li>
            <button
              onClick={() => navigate('/')}
              className="hover:text-gray-400 focus:outline-none"
            >
              Home
            </button>
          </li> */}
          <li>
            <Link to="/gallery" className="hover:text-gray-400">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/Alums" className="hover:text-gray-400">
              Alumni
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:text-gray-400">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400">
              Events
            </Link>
          </li>

          {/* Donation Dropdown */}

          {loginToken && (
            <li className="relative">
              {" "}
              <button
                className="flex items-center hover:text-gray-400 focus:outline-none"
                onClick={() => toggleDropdown("donation")}
                // onBlur={handleMouseLeave}
              >
                Donation
                {openDropdown === "donation" ? (
                  <ChevronUpIcon className="w-5 h-5 ml-1" />
                ) : (
                  <ChevronDownIcon className="w-5 h-5 ml-1" />
                )}
              </button>
              {openDropdown === "donation" && (
                <div
                  className="absolute bg-gray-700 mt-2 rounded shadow-lg py-2 z-50"
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/project"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Project
                  </Link>
                  <Link
                    to="/scholarship"
                    className="block px-4 py-2 hover:bg-gray-600"
                  >
                    Scholarship
                  </Link>
                </div>
              )}
            </li>
          )}

          {/* User Profile */}
          <li>
            <button
              onClick={() => navigate(loginToken ? "/user" : "/login")}
              className="hover:text-gray-400 focus:outline-none flex items-center space-x-2"
            >
              <UserCircleIcon className="w-6 h-6" />
              <span>Profile</span>
            </button>
          </li>

          {/* Logout */}
          <li>
            <button
              onClick={() => {
                loginToken && navigate("/");
                loginToken && localStorage.removeItem("authToken");
                !loginToken && navigate("/login");
              }}
              className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg flex items-center space-x-2 text-white"
            >
              <ArrowRightOnRectangleIcon className="w-6 h-6" />
              <span>{loginToken ? "Log Out" : "Log In"}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
