import React from 'react';
import Navbar from './Navbar';
import { scholarships } from '../object/scholarships'; // Import the object

const Scholarship = () => {
  return (
    <div className="bg-gray-200 min-h-screen"> {/* Apply bg-gray-200 here */}
      <Navbar />
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Available Scholarships</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {scholarships.map((scholarship, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl"
            >
              <img
                src={scholarship.imageUrl}
                alt={scholarship.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{scholarship.name}</h2>
                <p className="text-sm text-gray-600 mb-4">{scholarship.description}</p>
                <p className="text-sm font-medium text-gray-800 mb-2">
                  <strong>Eligibility:</strong> {scholarship.eligibility}
                </p>
                <p className="text-sm font-medium text-gray-800 mb-2">
                  <strong>Amount:</strong> {scholarship.amount}
                </p>
                <a
                  href={scholarship.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
                >
                  Apply Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scholarship;