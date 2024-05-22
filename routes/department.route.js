const express = require("express");
const {
    getDepartments,
    createDepartment,
} = require("../controllers/department.controller");

const router = express.Router();

// Routes
router.get("/departments", getDepartments);
router.post("/department/create", createDepartment);

module.exports = router;
