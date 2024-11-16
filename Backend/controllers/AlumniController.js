const db = require('../config/db');

// Get alumni profile data
exports.getAlumniProfile = (req, res) => {
  const alumniId = req.query.alumniId || 1; // Default for testing
  db.query('SELECT * FROM AlumniDetails WHERE alumni_id = ?', [alumniId], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result[0]);
    }
  });
};
