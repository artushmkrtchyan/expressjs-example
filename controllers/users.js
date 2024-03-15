const { Users } = require("../models/users");

const getUser = async (req, res, next) => {
    try {
        const user = await Users.findById(req.params.id);
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

const createUser = async (req, res, next) => {
    try {
        const newUser = new Users(req.body)
        const user = await newUser.save()
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

const getUsers = async (req, res, next) => {
    try {
        const user = await Users.find({});
        return res.json(user);
    } catch (e) {
        return next(e);
    }
};

module.exports = {
    getUser,
    getUsers,
    createUser
};
