const express = require('express');
const router = express.Router();
const { getAllMessages, sendMessage } = require('../controllers/messageController');

router.get('/', getAllMessages);
router.post('/', sendMessage);

module.exports = router;
