// const db = require('../config/db');
import { pool } from "../config/db.js";

// Get all messages
export const getAllMessages = (req, res) => {
  pool.query('SELECT * FROM Messages', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};

// Send a message
export const sendMessage = (req, res) => {
  const { sender_id, receiver_id, message_content } = req.body;
  const query = 'INSERT INTO Messages (sender_id, receiver_id, message_content) VALUES (?, ?, ?)';
  pool.query(query, [sender_id, receiver_id, message_content], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Message sent', messageId: result.insertId });
    }
  });
};
