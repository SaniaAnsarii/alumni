import { pool } from '../config/db.js';

// Get alumni profile data
export const getAlumniProfile = (req, res) => {
  const alumniId = req.query.alumniId || 1; // Default for testing
  pool.query('SELECT * FROM AlumniDetails WHERE alumni_id = ?', [alumniId], (err, result) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(result[0]);
    }
  });
};
