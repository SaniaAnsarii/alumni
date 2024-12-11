import {getAllJobs} from "../controllers/jobController.js"
import express from "express"
// const express = require('express');
const router = express.Router();
// const { getAllJobs } = require('../controllers/jobController');

router.get('/', getAllJobs);

export default   router;
