import React from "react";
import { useLocation, Link } from "react-router-dom";
import Navbar from "./Navbar";

const Alumni = () => {
  const location = useLocation();
  const alum = location.state;

  if (!alum) {
    return (
      <div>
        <Navbar />
        <div className="p-8 text-center">
          <h1 className="text-2xl font-semibold">No Alumni Data Found</h1>
          <Link
            to="/alums"
            className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
          >
            Back to Alumni List
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-200 min-h-screen" >
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6">
          {/* Alumni Image */}
          <div className="flex items-center justify-center">
            <img
              src={alum.imageUrl}
              alt={alum.name}
              className="w-full h-full object-cover rounded-md max-h-80 sm:max-h-64"
              loading="lazy"
            />
          </div>
          {/* Alumni Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center md:text-left">
              {alum.name}
            </h2>
            <p className="text-gray-500 text-center md:text-left mt-2">{alum.branch}</p>
            <p className="text-gray-400 text-center md:text-left">{alum.batch}</p>
            <p className="text-gray-700 mt-4 text-center md:text-left">
              {alum.description || "No additional details available."}
            </p>
          </div>
        </div>
        {/* Back Button */}
        <div className="text-center mt-6">
          <Link
            to="/alums"
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600"
          >
            Back to Alumni List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
