const mongoose = require("mongoose");

const GasSchema = new mongoose.Schema({
    id: {
        type: Number,
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
        type: Number,
        required: true
    },
    alerta: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model("gas", GasSchema, "alertas_gas");