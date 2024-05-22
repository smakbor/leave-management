const Leave = require("../models/leave.model");

const getLeaves = async (req, res) => {
    try {
        const leaves = await Leave.find({});
        res.status(202).json({
            data: leaves,
            message: "Sucess",
        });
    } catch (error) {
        console.log(error);
    }
};

const createLeave = async (req, res) => {
    try {
        let id = req.user.user;
        const {
            name,
            remarks,
            leaveType,
            noOfDays,
            startDate,
            endDate,
            reason,
        } = req.body;
        const leave = new Leave({
            admin: id,
            name,
            remarks,
            leaveType,
            noOfDays,
            startDate,
            endDate,
            reason,
        });

        const result = await leave.save();

        res.status(201).json({
            data: result,
            message: "Leave Type Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createLeave,
    getLeaves,
};
