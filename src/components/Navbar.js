import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [alumniOpen, setAlumniOpen] = useState(false);
  const [donationOpen, setDonationOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-8 py-4">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold">
          Alumni Association
        </div>
        
        {/* Main navigation items */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/gallery" className="hover:text-gray-400">Gallery</Link>
          </li>

          {/* Alumni dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setAlumniOpen(true)}
            onMouseLeave={() => setAlumniOpen(false)}
          >
            <button className="hover:text-gray-400 focus:outline-none">
              Alumni
            </button>
            {alumniOpen && (
              <ul className="absolute bg-gray-700 mt-2 rounded shadow-lg py-2">
                <li>
                  <Link to="/achievements" className="block px-4 py-2 hover:bg-gray-600">Achievements</Link>
                </li>
                <li>
                  <Link to="/directory" className="block px-4 py-2 hover:bg-gray-600">Alumni Directory</Link>
                </li>
                <li>
                  <Link to="/success" className="block px-4 py-2 hover:bg-gray-600">Success Story</Link>
                </li>
                <li>
                  <Link to="/feedback" className="block px-4 py-2 hover:bg-gray-600">Feedbacks and Surveys</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Other main items */}
          <li>
            <Link to="/jobs" className="hover:text-gray-400">Jobs</Link>
          </li>
          <li>
            <Link to="/events" className="hover:text-gray-400">Events</Link>
          </li>

          {/* Donation dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDonationOpen(true)}
            onMouseLeave={() => setDonationOpen(false)}
          >
            <button className="hover:text-gray-400 focus:outline-none">
              Donation
            </button>
            {donationOpen && (
              <ul className="absolute bg-gray-700 mt-2 rounded shadow-lg py-2">
                <li>
                  <Link to="/project" className="block px-4 py-2 hover:bg-gray-600">Project</Link>
                </li>
                <li>
                  <Link to="/scholarship" className="block px-4 py-2 hover:bg-gray-600">Scholarship</Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
