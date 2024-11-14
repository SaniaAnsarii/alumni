import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CalendarIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const Welcome = () => {
  return (
    <div className="bg-pastel-blue min-h-screen">
      {/* Top buttons */}
      <div className="absolute top-4 left-4 flex space-x-4 z-10">
        <button className="flex items-center space-x-1 bg-white text-black px-4 py-2 font-bold rounded shadow hover:bg-gray-200 transition">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <Link to="/login">Join Now</Link>
        </button>
      </div>

      {/* Welcome Section */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <img 
          src="https://images.unsplash.com/photo-1584592487914-a29c64f25887?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="background" 
          className="absolute w-full h-full object-cover opacity-60" 
        />
        <h1 className="relative text-4xl font-bold text-white mb-4 z-10">Welcome to Our Website</h1>
        <p className="relative z-10 text-xl text-white bg-gray-800 bg-opacity-75 p-4 rounded">
          We are glad to have you here. Explore our website to know more about us.
        </p>
      </div>

      {/* About Us Section */}
      <section id="about-us" className="p-8">
        <div className="text-center text-2xl font-semibold mb-2">
          What we <span className="text-blue-500">are</span>
        </div>
        <div className="w-full h-1 bg-pastel-purple mb-6"></div>
        <div className="flex flex-col lg:flex-row items-center">
          <img 
            src="https://images.unsplash.com/photo-1588747189888-b24581873a82?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="about us" 
            className="w-17 lg:w-1/2 rounded-lg mb-4 lg:mb-0"
          />
          <p className="lg:w-1/2 lg:ml-6 text-gray-700">
            We are committed to fostering a community built on respect and integrity, where alumni and current students can connect, collaborate and support each other. Our platform facilitates meaningful engagement, allowing members to share experiences, offer guidance, and participate in discussions that merge practical insights with innovative ideas.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="p-8 bg-pastel-purple">
        <h3 className="text-center text-2xl font-semibold">
          Our <span className="text-blue-500">Events</span>
        </h3>
        <div className="w-full h-1 bg-pastel-purple mb-4"></div>
        <p className="mt-4 text-gray-700">
          Get ready for an exciting series of Presentations, Kaushlam, Sports Day, and Alumni Meet. These events provide opportunities to gain insights, collaborate across disciplines, and support boundary-pushing ideas. Stay tuned for more details on these creative and collaborative opportunities!
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us" className="p-8 bg-pastel-purple">
        <h3 className="text-center text-2xl font-semibold">
          Contact <span className="text-blue-500">Us</span>
        </h3>
        <div className="w-full h-1 bg-pastel-purple mb-4"></div>
        <h4 className="text-center mt-4 font-semibold">Address</h4>
        <ul className="text-center mt-2">
          <li>Office Address: Near Luthra Hospital, Nehru Nagar, Bilaspur, 495001 (C.G.)</li>
          <li>Email: abgecbilaspur@gmail.com</li>
        </ul>
      </section>
    </div>
  );
};

export default Welcome;
