import express from "express";
import authMiddleware  from "../middleware/authMiddleware.js";

import { pool } from "../config/db.js";

const router = express.Router();



export default router;
