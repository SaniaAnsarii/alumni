import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import alumniList from '../object/alumniList';

const Alums = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
       
        {/* Grid container */}
        <div className="grid grid-cols-4 gap-6">
          {alumniList.map((alum, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alums;
