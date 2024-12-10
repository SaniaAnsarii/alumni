import {pool} from "../config/db.js"

// Get all events
export const getAllEvents = (req, res) => {
  pool.query('SELECT * FROM Events', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};
