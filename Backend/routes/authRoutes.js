import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { pool } from '../config/db.js';
import authMiddleware from '../middleware/authMiddleware.js';



const router = express.Router();

// Helper function to generate JWT token
const generateToken = (user) => {
  const payload = { id: user.id, email: user.email };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

// Sign-Up Route
router.post('/signup', async (req, res) => {
  const { email, password, full_name, department, batch, gender, user_type } = req.body;

  try {
    // Check if user already exists
    const [existingUser] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ message: 'User already exists!' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const [result] = await pool.execute(
      'INSERT INTO users (email, password, full_name, department, batch, gender, user_type) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [email, hashedPassword, full_name, department, batch, gender, user_type]
    );

    // Generate JWT token
    const token = generateToken(result);

    res.status(201).json({ message: 'User registered successfully!', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Sign-In Route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const [user] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);

    if (user.length === 0) {
      return res.status(400).json({ message: 'User not found!' });
    }

    // Check if password matches
    const validPassword = await bcrypt.compare(password, user[0].password);

    if (!validPassword) {
      return res.status(400).json({ message: 'Incorrect password!' });
    }

    // Generate JWT token
    const token = generateToken(user[0]);

    res.status(200).json({ message: 'Login successful', token });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});



export default router;