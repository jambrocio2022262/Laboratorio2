const { Schema, model} = require('mongoose');

const MascotaSchema = Schema({
    nombre:{
        type: String,
        require: [true, 'El nombre de la mascota es obligatorio']
    },
    especie:{
        type: String,
        require: [true, 'La especie es obligatoria']
    },
    edad:{
        type: String,
        require: [true, 'La edad es obligatoria']
    },
    color:{
        type: String,
        require: [true, 'El color es obligatorio']
    },
    tamaño:{
        type: String,
        require: [true, 'El tamaño es obligatorio']
    },
    peso:{
        type: String,
        require: [true, 'El peso es obligatorio']
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model ('Mascota', MascotaSchema);

