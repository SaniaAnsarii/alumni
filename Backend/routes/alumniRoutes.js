const express = require('express');
const router = express.Router();
const { getAlumniProfile } = require('../controllers/AlumniController');
const { verifyToken } = require('../middleware/authMiddleware');

router.get('/profile', verifyToken, getAlumniProfile);

module.exports = router;
