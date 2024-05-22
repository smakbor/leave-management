const LeaveType = require("../models/leaveType.model");

const getLeaveTypes = async (req, res) => {
    try {
        const leaveTypes = await LeaveType.find({});
        res.status(202).json({
            data: leaveTypes,
            message: "Sucess",
        });
    } catch (error) {
        console.log(error);
    }
};

const createLeaveType = async (req, res) => {
    try {
        const id = req.user.user;
        const { name, remarks } = req.body;
        const leaveType = new LeaveType({
            admin: id,
            name,
            remarks,
        });

        const result = await leaveType.save();

        res.status(201).json({
            data: result,
            message: "Leave Type Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createLeaveType,
    getLeaveTypes,
};
