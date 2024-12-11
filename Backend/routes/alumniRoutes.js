import express from "express";
import authMiddleware  from "../middleware/authMiddleware.js";

import { pool } from "../config/db.js";

const router = express.Router();

router.get('/user/info', authMiddleware, async (req, res) => {
  console.log(req, res, "resresresresres");
  try {
    const userEmail = req.user?.email;  // Use optional chaining to prevent undefined

    if (!userEmail) {
      return res.status(400).json({ message: 'User ID not found in request' });
    }

    const [user] = await pool.execute(`
      SELECT  email, full_name, department, batch, gender, user_type
      FROM users
      WHERE users.email = ?
    `, [userEmail]);

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare the response
    const responseData = {
      ...user[0],
      skills: user[0].skills ? user[0].skills.split(',') : [], // Assuming skills are stored as comma-separated values
    };

    res.status(200).json(responseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});


export default router;
