const db = require('../config/db');

// Get all events
exports.getAllEvents = (req, res) => {
  db.query('SELECT * FROM Events', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};
