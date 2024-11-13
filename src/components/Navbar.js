import {  Tooltip } from '@radix-ui/themes';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState('');

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? '' : dropdown));
  };

  const handleMouseLeave = () => setOpenDropdown('');

  return (
    <nav className="bg-gray-800 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img className="w-12" src="https://abgec.in/assets/images/gecbwobg.png" alt="logo" />
          <div className="text-xl font-bold text-white">Alumni Association</div>
        </div>

        {/* Main navigation items */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
          </li>

          {/* Alumni dropdown */}
          <Tooltip content={<div
                className="absolute bg-gray-700 mt-2 rounded shadow-lg py-2"
                onMouseLeave={handleMouseLeave} // Closes when mouse leaves dropdown area
              >
                <Link to="/achievements" className="block px-4 py-2 hover:bg-gray-600">Achievements</Link>
                <Link to="/directory" className="block px-4 py-2 hover:bg-gray-600">Alumni Directory</Link>
                <Link to="/success" className="block px-4 py-2 hover:bg-gray-600">Success Story</Link>
                <Link to="/feedback" className="block px-4 py-2 hover:bg-gray-600">Feedbacks and Surveys</Link>
              </div>}
              style={{bottom:"200px", display:"relative"}}
              >
	
          <li className="relative">
            <button
              className="hover:text-gray-400 focus:outline-none"
              onClick={() => toggleDropdown('alumni')}
              // onBlur={handleMouseLeave} // Closes dropdown when focus is lost
            >
              Alumni
            </button>
            {/* {openDropdown === 'alumni' && (
              
            )} */}
          </li>
</Tooltip>


          <li>
            <Link to="/jobs" className="hover:text-gray-400">Jobs</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400">Events</Link>
          </li>

          {/* Donation dropdown */}
          <li className="relative">
            <button
              className="hover:text-gray-400 focus:outline-none"
              onClick={() => toggleDropdown('donation')}
              onBlur={handleMouseLeave}
            >
              Donation
            </button>
            {openDropdown === 'donation' && (
              <div
                className="absolute bg-gray-700 mt-2 rounded shadow-lg py-2"
                onMouseLeave={handleMouseLeave}
              >
                <Link to="/project" className="block px-4 py-2 hover:bg-gray-600">Project</Link>
                <Link to="/scholarship" className="block px-4 py-2 hover:bg-gray-600">Scholarship</Link>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
