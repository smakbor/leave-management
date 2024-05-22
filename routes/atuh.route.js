// routes/userRoutes.js
const express = require("express");
const { isAuth } = require("../middlewares/auth");
const { register, login } = require("../controllers/auth.controller");
const router = express.Router();

// Routes
router.post("/auth/register", register);
router.post("/auth/login", login);

module.exports = router;
