const db = require('../config/db');

// Get all messages
exports.getAllMessages = (req, res) => {
  db.query('SELECT * FROM Messages', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};

// Send a message
exports.sendMessage = (req, res) => {
  const { sender_id, receiver_id, message_content } = req.body;
  const query = 'INSERT INTO Messages (sender_id, receiver_id, message_content) VALUES (?, ?, ?)';
  db.query(query, [sender_id, receiver_id, message_content], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Message sent', messageId: result.insertId });
    }
  });
};
