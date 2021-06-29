const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        unique: true
    },
    pass: {
        type: String,
        required: true,
        unique: true
    },
    dispositivos: {
        type: Array,
        required: true
    }
});

module.exports = mongoose.model("user", UserSchema, "user");