import React from "react";
import Navbar from "./Navbar";
import eventLists from "../object/eventLists";

const Events = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Upcoming Events
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8 lg:px-16">
        {eventLists && eventLists.length > 0 ? (
          eventLists.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h2>
                <p className="text-gray-600 text-sm">
                  <strong>Category:</strong> {event.category}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Venue:</strong> {event.venue}
                </p>
                <p className="text-gray-600 text-sm">
                  <strong>Date:</strong> {event.date}
                </p>
                <a
                  href={event.registrationLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 text-center bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-200"
                >
                  Register
                </a>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600 col-span-full">
            No events found
          </p>
        )}
      </div>
    </div>
  );
};

export default Events;
