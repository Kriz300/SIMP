const mongoose = require("mongoose");

const RuidoSchema = new mongoose.Schema({
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

module.exports = mongoose.model("ruido", RuidoSchema, "alertas_ruido");