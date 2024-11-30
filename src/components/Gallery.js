import React from 'react';
import Navbar from './Navbar'; // Assuming Navbar is part of your project
import galleryList from '../object/galleryList'; // Adjust path as necessary

const Gallery = () => {
  return (
    <div>
      <Navbar />
      <div className="p-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Gallery</h1>
        <div className="grid grid-cols-3 gap-6">
          {galleryList.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:scale-105"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4 text-center">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
