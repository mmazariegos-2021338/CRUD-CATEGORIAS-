const { Schema, model } = require('mongoose');
const CategoriaSchema = Schema({
    nombre_categoria: {
        type: String,
        required: [true, 'El nombre para la categoria es obligatorio']
    },
    nombre_producto: {
        type: String
    },
    existencia: {
        type: Boolean,
        default: true
    },
    img: {
        type: String
    },
    estado: {
        type: Boolean,
        default: true
    }
});

module.exports = model('Categoria', CategoriaSchema)