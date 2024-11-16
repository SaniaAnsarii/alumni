const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

// Register User
exports.registerUser = (req, res) => {
  const { email, password, full_name, phone, user_type, profile_picture } = req.body;

  // Check if user already exists
  db.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
    if (results.length > 0) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) throw err;

      // Insert user into the database
      const sql = 'INSERT INTO Users (email, password_hash, full_name, phone, user_type, profile_picture) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(sql, [email, hash, full_name, phone, user_type, profile_picture], (err, results) => {
        if (err) return res.status(500).json({ error: 'Database error' });
        res.status(201).json({ message: 'User registered successfully' });
      });
    });
  });
};

// Login User
exports.loginUser = (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM Users WHERE email = ?', [email], (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ message: 'Invalid email or password' });

    const user = results[0];

    // Compare password with hashed password
    bcrypt.compare(password, user.password_hash, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

      // Create and sign JWT token
      const token = jwt.sign(
        { user_id: user.user_id, user_type: user.user_type },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );

      res.json({ message: 'Login successful', token });
    });
  });
};
