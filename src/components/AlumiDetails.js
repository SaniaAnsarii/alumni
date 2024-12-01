import React from "react";
import { useParams } from "react-router-dom";
import alumniList from "../object/alumniList";
import Navbar from "./Navbar";

const AlumiDetails = () => {
  const { alumniId } = useParams();

  // Find the alumni by ID
  const alum = alumniList.find((a) => a.id === parseInt(alumniId, 10));

  // If alumni not found
  if (!alum) {
    return (
      <>
        <Navbar />
        <div className="p-8 text-center">
          <h2 className="text-2xl font-bold">Alumni Not Found</h2>
          <p className="text-gray-500">
            We couldn't find the alumni you're looking for.
          </p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="p-4 sm:p-6 md:p-8">
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-6">
          <img
            src={alum.imageUrl}
            alt={alum.name}
            className="w-full max-h-[400px] object-cover rounded-md mb-4"
            loading="lazy" // Lazy loading for performance optimization
          />
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-800">{alum.name}</h2>
            <p className="text-gray-500 mt-1">{alum.branch}</p>
            <p className="text-gray-400 mt-1">{alum.batch}</p>
          </div>
          <div className="mt-6 md:mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Success Story:</h3>
            <p className="text-gray-700 mt-2">{alum.successStory}</p>
          </div>
          <div className="mt-6 md:mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Achievements:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
              {alum.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
          <div className="mt-6 md:mt-8">
            <h3 className="text-lg font-semibold text-gray-800">Feedback:</h3>
            <p className="text-gray-700 mt-2">{alum.feedback}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlumiDetails;
