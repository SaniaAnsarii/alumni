import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon, UserIcon, CalendarIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const Welcome = () => {
  return (
    <div className="bg-#C5D3E8 min-h-screen">
      {/* Top buttons */}
      <div className="absolute top-4 left-4 flex space-x-4 z-10">
        <button className="flex items-center space-x-1 bg-white text-black px-4 py-2 font-bold rounded shadow hover:bg-gray-200 transition">
          <ArrowRightOnRectangleIcon className="w-5 h-5" />
          <Link to="/login">Join Now</Link>
        </button>
      </div>
      <div className='bg-sky-100'>


      {/* Welcome Section */}
      <div className="relative flex flex-col items-center justify-center h-screen">
        <img 
          src="https://images.unsplash.com/photo-1584592487914-a29c64f25887?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="background" 
          className="absolute w-full h-full object-cover opacity-60" 
          />
        <h1 className="relative text-4xl font-bold text-white mb-4 z-10">Welcome to Our Website</h1>
        <p className="relative z-10 text-xl text-white bg-gray-800 bg-opacity-75 p-4 rounded">
          We are glad to have you here. Scroll down to explore our website and to know more about us.
        </p>
      </div>

      {/* About Us Section */}
      <section id="about-us" >
        <div className="text-center text-2xl font-semibold mb-2 p-5 bg-purple-200 ">
         

          What we <span className="text-blue-500">are</span>
        
        </div>
        <div className="w-full h-1 bg-pastel-purple mb-6"></div>
        <div >
          {/* <img 
            src="https://images.unsplash.com/photo-1588747189888-b24581873a82?q=80&w=386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            alt="about us" 
            className="w-10 lg:w-1/2 rounded-lg mb-4 lg:mb-0"
            /> */}
          <p className=" text-gray-700">
          We are committed to fostering a thriving community built on respect, integrity, and collaboration, where alumni and current students come together to connect, share, and support one another. Our platform is designed to encourage meaningful engagement by enabling members to exchange valuable experiences, provide mentorship, and offer guidance. Whether you’re seeking to advance your career, build lasting relationships, or contribute to innovative discussions, our community provides a space for growth and inspiration. We believe in bridging the gap between tradition and innovation, empowering individuals to participate in insightful conversations, network effectively, and collaborate across diverse disciplines to bring transformative ideas to life. Together, we create a vibrant ecosystem that values learning, creativity, and mutual support.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" >
        <h3 className="text-center text-2xl font-semibold my-4  p-5 bg-purple-200">
          Our <span className="text-blue-500">Events</span>
        </h3>
        <div className="w-full h-1 bg-pastel-purple mb-4"></div>
        <p className="mt-4 text-gray-700">
        Get ready for an exciting series of events that promise to inspire, engage, and connect! From insightful Presentations that showcase innovative ideas to Kaushlam, a celebration of skills and talent, there's something for everyone. Experience the energy and camaraderie of Sports Day, where teamwork and determination take center stage, and don't miss the Alumni Meet, a heartfelt reunion filled with shared memories, valuable networking, and future collaborations. These events are designed to provide unique opportunities to gain fresh insights, exchange knowledge, and collaborate across diverse disciplines. Stay tuned for more updates on these vibrant, creative, and transformative opportunities that aim to spark inspiration and foster lifelong connections!
        </p>
      </section>

      {/* Contact Us Section */}
      <section id="contact-us">
        <h3 className="text-center text-2xl font-semibold p-5 my-4 bg-purple-200">
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
    </div>
  );
};

export default Welcome;
