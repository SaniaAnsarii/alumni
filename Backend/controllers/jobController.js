// const db = require('../config/db');
import {pool} from "../config/db.js"

// Get all job listings
export const getAllJobs = (req, res) => {
  pool.query('SELECT * FROM Jobs', (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};
