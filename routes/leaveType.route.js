const express = require("express");
const {
    getLeaveTypes,
    createLeaveType,
} = require("../controllers/leaveType.controller");

const router = express.Router();

// Routes
router.get("/leaveTypes", getLeaveTypes);
router.post("/create", createLeaveType);

module.exports = router;
