const mongoose = require("mongoose");

// Define schema for blog posts
const departmentSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    deptStatus: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "INACTIVE",
    },
    remarks: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Department = mongoose.model("Department", departmentSchema);

module.exports = Department;
