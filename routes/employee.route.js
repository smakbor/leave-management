const express = require("express");
const {
    getEmployees,
    createEmployee,
} = require("../controllers/employee.controller");

const router = express.Router();

// Routes
router.get("/employees", getEmployees);
router.post("/employee/create", createEmployee);

module.exports = router;
