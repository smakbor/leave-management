const express = require("express");
const { getLeaves, createLeave } = require("../controllers/leave.controller");

const router = express.Router();

// Routes
router.get("/leaves", getLeaves);
router.post("/create", createLeave);

module.exports = router;
