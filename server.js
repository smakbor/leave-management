const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// TEST ROUTE

app.get("/health", (req, res) => {
    res.send("This is test server and the path is right");
});

// DATABASE CONNECTION
//"mongodb+srv://smakbar3965:aYxH0ymWhjcyqIKW@cluster0.tto7qr6.mongodb.net/sardar-inventory"

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("DB Connected");
    })
    .catch((error) => handleError(error));

// imported Routes

const admin = require("./routes/atuh.route");
const department = require("./routes/department.route");
const employee = require("./routes/employee.route");
const leave = require("./routes/leave.route");
const leaveType = require("./routes/leaveType.route");

const { isAuth } = require("./middlewares/auth");

// Routes
app.use("/api", admin);
app.use("/api", leaveType);
app.use("/api", leave);
app.use("/api", isAuth, employee);
app.use("/api", isAuth, department);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
