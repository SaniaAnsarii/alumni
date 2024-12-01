const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

// Register User
exports.registerUser = (req, res) => {
  const { email, password, full_name, user_type, batch, department } = req.body;
  console.log(email);
  console.log(password);
  console.log(department);
  console.log(full_name);
  console.log(user_type);
  console.log(batch);
  // Validate input
  if (!email || !password || !full_name || !user_type || !batch || !department) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const validUserTypes = ['alumni', 'student', 'admin'];
  if (!validUserTypes.includes(user_type)) {
    return res.status(400).json({ message: 'Invalid user type' });
  }

  // Check if user already exists
  db.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database SELECT Error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        console.error('Password Hash Error:', err);
        return res.status(500).json({ message: 'Error hashing password' });
      }

      // Insert user into the database
      const sql = `
        INSERT INTO Users (email, password_hash, full_name, user_type, batch, department) 
        VALUES (?, ?, ?, ?, ?, ?)
      `;
      db.query(sql, [email, hash, full_name, user_type, batch, department], (err, results) => {
        if (err) {
          console.error('Database Insert Error:', err);
          return res.status(500).json({ message: 'Database error' });
        }

        // Generate JWT token
        const token = jwt.sign(
          { user_email: email, user_type },
          process.env.JWT_SECRET,
          { expiresIn: '1h' }
        );

        res.status(201).json({ message: 'User registered successfully', token });
      });
    });
  });
};

// Login User
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  // Validate input
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  // Check if user exists
  db.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database SELECT Error:', err);
      return res.status(500).json({ message: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const user = results[0];

    // Compare password with hashed password
    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) {
        console.error('Password Compare Error:', err);
        return res.status(500).json({ message: 'Error verifying password' });
      }
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      // Generate JWT token
      const token = jwt.sign(
        { user_email: email, user_type: user.user_type },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.status(201).json({ message: 'Login successful', token });
    });
  });
};