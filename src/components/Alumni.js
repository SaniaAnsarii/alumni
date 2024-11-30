import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import Navbar from './Navbar';

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
    <div>
      <Navbar />
      <div className="p-8 max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden p-6">
          <img
            src={alum.imageUrl}
            alt={alum.name}
            className="h-64 w-full object-cover rounded-md"
          />
          <div className="mt-4 text-center">
            <h2 className="text-2xl font-semibold">{alum.name}</h2>
            <p className="text-gray-500">{alum.branch}</p>
            <p className="text-gray-400">{alum.batch}</p>
            <p className="text-gray-700 mt-4">{alum.description || "No additional details available."}</p>
          </div>
        </div>
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
