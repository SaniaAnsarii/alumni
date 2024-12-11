import express from "express"// const express = require('express');
import {getAllMessages, sendMessage} from '../controllers/messageController.js'
const router = express.Router();
// const { getAllMessages, sendMessage } = require('../controllers/messageController');

router.get('/', getAllMessages);
router.post('/', sendMessage);

export default router
