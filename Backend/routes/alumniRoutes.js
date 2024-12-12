import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { pool } from "../config/db.js";

const router = express.Router();

router.get('/user/info', authMiddleware, async (req, res) => {
  try {
    const userEmail = req.user?.email;  // Use optional chaining to prevent undefined

    if (!userEmail) {
      return res.status(400).json({ message: 'User ID not found in request' });
    }

    const [user] = await pool.execute(`
      SELECT email, full_name, department, batch, gender, user_type, skills, experience, instagram, linkedin, github, facebook
      FROM users
      WHERE users.email = ?
    `, [userEmail]);

    if (user.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Prepare the response with JSON parsing
    const responseData = {
      ...user[0],
      skills: JSON.parse(user[0].skills),  // Parse skills JSON
      experience: JSON.parse(user[0].experience)  // Parse experience JSON
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
    const { full_name, department, batch, gender, user_type, skills, experience, instagram, linkedin, facebook, github } = req.body;

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
      // Store skills as JSON
      updates.push("skills = ?");
      values.push(JSON.stringify(skills));  // Convert the skills array to a JSON string
    }
    if (experience) {
      // Store experience as JSON
      updates.push("experience = ?");
      values.push(JSON.stringify(experience));  // Convert the experience array to a JSON string
    }
    if (instagram) {
      updates.push("instagram = ?");
      values.push(instagram);
    }
    if (linkedin) {
      updates.push("linkedin = ?");
      values.push(linkedin);
    }
    if (facebook) {
      updates.push("facebook = ?");
      values.push(facebook);
    }
    if (github) {
      updates.push("github = ?");
      values.push(github);
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
