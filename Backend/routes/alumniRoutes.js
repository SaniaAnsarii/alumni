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
router.put('/user/update', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user?.email;  // Use optional chaining to prevent undefined

    if (!userEmail) {
      return res.status(400).json({ message: 'User ID not found in request' });
    }

    // Get the fields to update from the request body
    const { full_name, department, batch, gender, user_type, skills, experience, instagram_url, linkedin_url, facebook_url, github_url } = req.body;

    // Build the SQL query to update user information
    const updates = [];
    const values = [];

    if (full_name) {
      updates.push("full_name = ?");
      values.push(full_name);
    }
    if (department) {
      updates.push("department = ?");
      values.push(department);
    }
    if (batch) {
      updates.push("batch = ?");
      values.push(batch);
    }
    if (gender) {
      updates.push("gender = ?");
      values.push(gender);
    }
    if (user_type) {
      updates.push("user_type = ?");
      values.push(user_type);
    }
    if (skills) {
      updates.push("skills = ?");
      values.push(skills.join(',')); // Store skills as a comma-separated string
    }
    if (experience) {
      updates.push("experience = ?");
      values.push(experience);
    }
    if (instagram_url) {
      updates.push("instagram_url = ?");
      values.push(instagram_url);
    }
    if (linkedin_url) {
      updates.push("linkedin_url = ?");
      values.push(linkedin_url);
    }
    if (facebook_url) {
      updates.push("facebook_url = ?");
      values.push(facebook_url);
    }
    if (github_url) {
      updates.push("github_url = ?");
      values.push(github_url);
    }

    // If no valid fields were provided to update, return a 400 error
    if (updates.length === 0) {
      return res.status(400).json({ message: 'No fields to update' });
    }

    // Add the WHERE clause to ensure we update the correct user
    values.push(userEmail);
    const sqlQuery = `
      UPDATE users 
      SET ${updates.join(', ')}
      WHERE email = ?
    `;

    // Execute the SQL query
    const [result] = await pool.execute(sqlQuery, values);

    // If no rows were updated, return a 404 error
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Return success message
    res.status(200).json({ message: 'User profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
});


export default router;
