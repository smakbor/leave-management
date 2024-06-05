const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");

const register = async (req, res) => {
    console.log(req.body);
    try {
        const { name, mobile, email, password, address, role } = req.body;
        let user = await Admin.findOne({ email });

        // check user is exists
        if (user) {
            return res.status(400).json({ message: "Admin already exists" });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        //create new user
        user = new Admin({
            name,
            mobile,
            email,
            password: hashedPassword,
            address,
            role,
        });
        await user.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error" });
    }
};

const login = async (req, res) => {
    const { mobile, password } = req.body;
    console.log(mobile, password);
    const findUser = await Admin.findOne({ mobile });
    if (findUser) {
        bcrypt
            .compare(password, findUser.password)
            .then((result) => {
                // const token = {
                //     _id: findUser._id,
                //     name: findUser.name,
                //     email: findUser.email,
                //     mobile: findUser.mobile,
                // };
                // Generate JWT token
                const token = jwt.sign({ user: findUser._id }, "secret", {
                    expiresIn: "1h",
                });

                if (result) {
                    res.status(200).json({
                        message: "Login successfull",
                        data: token,
                        user: findUser,
                    });
                } else {
                    res.status(500).json({
                        message: "Server errror",
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }
};

module.exports = {
    register,
    login,
};
