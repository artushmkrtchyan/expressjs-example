const mongoose = require("mongoose");

const usersSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            trim: true,
            sparse: true,
            unique: true,
        }
    },
    { timestamps: true }
);

exports.Users = mongoose.model("Users", usersSchema);
