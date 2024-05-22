const Department = require("../models/department.model");

const getDepartments = async (req, res) => {
    try {
        const departments = await Department.find({});
        res.status(202).json({
            data: departments,
            message: "Sucess",
        });
    } catch (error) {
        console.log(error);
    }
};

const createDepartment = async (req, res) => {
    try {
        const id = req?.user._id;

        const { name, deptStatus, remarks } = req.body;
        const department = new Department({
            admin: id,
            name,
            deptStatus,
            remarks,
        });

        const result = await department.save();

        res.status(201).json({
            data: result,
            message: "Department Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createDepartment,
    getDepartments,
};
