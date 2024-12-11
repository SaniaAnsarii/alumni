import express from "express";
import authMiddleware  from "../middleware/authMiddleware.js";

import { pool } from "../config/db.js";

const router = express.Router();

router.get('/user/info', authMiddleware, async (req, res) => {
    console.log(req,res,"resresresresres");
    try {
      const userId = req.user.id;
  
      const [user] = await pool.execute(`
        SELECT id, email, full_name, department, batch, gender, user_type
               
        FROM users
        WHERE users.id = ?
      `, [userId]);
  
      if (user.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Prepare the response
      const responseData = {
        ...user[0],
        skills: user.skills ? user.skills.split(',') : [], // Assuming skills are stored as comma-separated values
      };
  
      res.status(200).json(responseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

export default router;
