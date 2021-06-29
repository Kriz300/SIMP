const mongoose = require("mongoose");

const SimpSchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    fecha: {
        type: Array,
        required: true
    },
    hora: {
        type: Array,
        required: true
    },
    valor: {
        type: Int32Array,
        required: true
    },
    alerta: {
        type: Int32Array,
        required: true
    }
});

module.exports = mongoose.model("alertas_gas", DispSchema, "alertas_temperatura");