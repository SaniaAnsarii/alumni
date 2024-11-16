import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Navbar from './Navbar';

const Alums = () => {
  return (
    <div>
      <Navbar />
      <div className="card" style={{ width: '18rem', margin: '20px auto' }}>
        <img
          src="https://via.placeholder.com/286x180" // Replace with a valid image URL
          className="card-img-top"
          alt="Alumni"
        />
        <div className="card-body">
          <h5 className="card-title">Alumni Name</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <Link to="/alumni" className="btn btn-primary">
            Go to Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alums;
