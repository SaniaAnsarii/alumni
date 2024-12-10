import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        {/* Welcome Section */}
        <div className="relative flex flex-col items-center justify-center h-screen">
          <img
            src="https://images.unsplash.com/photo-1584592487914-a29c64f25887?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="background"
            className="absolute w-full h-full object-cover opacity-60"
          />
          <h1 className="relative text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 z-10 text-center">
            Welcome to Our Website
          </h1>
          <p className="relative z-10 text-md md:text-lg lg:text-xl text-white bg-gray-800 bg-opacity-75 p-4 rounded text-center max-w-2xl">
            We are glad to have you here. Scroll down to explore our website and
            to know more about us.
          </p>
        </div>

        {/* About Us Section */}
        <section id="about-us" className="px-4 py-8">
          <div className="text-center text-2xl font-semibold mb-4 bg-purple-200 py-3">
            What we <span className="text-blue-500">are</span>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-sm md:text-base lg:text-lg text-justify">
              We are committed to fostering a thriving community built on
              respect, integrity, and collaboration, where alumni and current
              students come together to connect, share, and support one another.
              Our platform is designed to encourage meaningful engagement by
              enabling members to exchange valuable experiences, provide
              mentorship, and offer guidance...
            </p>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="px-4 py-8 bg-sky-50">
          <h3 className="text-center text-2xl font-semibold mb-4 bg-purple-200 py-3">
            Our <span className="text-blue-500">Events</span>
          </h3>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-sm md:text-base lg:text-lg text-justify">
              Get ready for an exciting series of events that promise to
              inspire, engage, and connect! From insightful Presentations that
              showcase innovative ideas to Kaushlam, a celebration of skills and
              talent...
            </p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact-us" className="px-4 py-8">
          <h3 className="text-center text-2xl font-semibold mb-4 bg-purple-200 py-3">
            Contact <span className="text-blue-500">Us</span>
          </h3>
          <div className="max-w-xl mx-auto text-center">
            <h4 className="mt-4 font-semibold text-lg">Address</h4>
            <ul className="text-gray-700 text-sm md:text-base mt-2">
              <li>
                Office Address: Near Luthra Hospital, Nehru Nagar, Bilaspur,
                495001 (C.G.)
              </li>
              <li>Email: abgecbilaspur@gmail.com</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
