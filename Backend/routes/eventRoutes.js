import {getAllEvents} from "../controllers/eventController.js"

import express from 'express';
const router = express.Router();
// const { getAllEvents } = require('../controllers/eventController');
router.get('/', getAllEvents);

export default  router;
