import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import alumniList from '../object/alumniList';

const Alums = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter alumni based on search term
  const filteredAlumni = alumniList.filter((alum) =>
    alum.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Navbar />
      <div className="p-8">
        {/* Search Bar */}
        <div className="mb-6 flex items-center relative">
          <input
            type="text"
            placeholder="Search for an alumni..."
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute left-3 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
            />
          </svg>
        </div>

        {/* Grid container */}
        <div className="grid grid-cols-4 gap-6">
          {filteredAlumni.length > 0 ? (
            filteredAlumni.map((alum, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg overflow-hidden p-4 transform transition hover:scale-105"
              >
                <img
                  src={alum.imageUrl}
                  alt={alum.name}
                  className="h-48 w-full object-cover"
                />
                <div className="mt-4 text-center">
                  <h2 className="text-lg font-semibold">{alum.name}</h2>
                  <p className="text-gray-500">{alum.branch}</p>
                  <p className="text-gray-400">{alum.batch}</p>
                  <Link
                    to="/alumni"
                    className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
                  >
                    Go To Profile
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-4">
              No alumni found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Alums;
