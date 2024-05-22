const mongoose = require("mongoose");

// Define schema for blog posts
const leaveTypeSchema = new mongoose.Schema({
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Admin",
        required: true,
    },
    name: {
        type: String,
        required: true,
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

const LeaveType = mongoose.model("LeaveType", leaveTypeSchema);

module.exports = LeaveType;
