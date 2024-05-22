let jwt = require("jsonwebtoken");
const Admin = require("../models/admin.model");
const isAuth = async (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        res.send("Not authorized!");
    }

    const decode = jwt.verify(token, "secret");
    const id = decode.user;
    const findUser = await Admin.find({ _id: id });
    req.user = findUser[0];
    next();
};

module.exports = {
    isAuth,
};
