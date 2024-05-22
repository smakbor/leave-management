const Admin = require("../models/admin.model");
const Employee = require("../models/employee.model");
const bcrypt = require("bcryptjs");

const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(202).json({
            data: employees,
            message: "Sucess",
        });
    } catch (error) {
        console.log(error);
    }
};

const createEmployee = async (req, res) => {
    try {
        const id = req?.user._id;
        const { name, email, mobile, address, role, department, password } =
            req.body;
        const employee = new Employee({
            admin: id,
            name,
            email,
            mobile,
            address,
            role,
            department,
            password,
        });

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new Admin({
            name,
            mobile,
            email,
            password: hashedPassword,
            address,
            role,
        });

        const result = await employee.save();
        await user.save();
        await res.status(201).json({
            data: result,
            message: "Employee Created Successfully",
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    createEmployee,
    getEmployees,
};
