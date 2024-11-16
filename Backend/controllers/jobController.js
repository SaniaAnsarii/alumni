const db = require('../config/db');

// Get all job listings
exports.getAllJobs = (req, res) => {
  db.query('SELECT * FROM Jobs', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};
