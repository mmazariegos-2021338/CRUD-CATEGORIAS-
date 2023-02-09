const { response, request } = require('express');
const bcryptjs = require('bcryptjs');
const Categoria = require('../models/categoria');
const getCategorias = async (req = request, res = response) => {
    const query = { estado: true };
    const listaCategoria = await Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
    ]);
    res.json({
        msg: 'GET API de categorias',
        listaCategoria
    });
}
const postCategoria = async (req = request, res = response) => {
    const { nombre_categoria, nombre_producto, existencia, estado } = req.body;
    const categoriaDB = new Categoria({ nombre_categoria, nombre_producto, existencia, estado });
    await categoriaDB.save();
    res.status(201).json({
        msg: 'POST API de categoria',
        categoriaDB
    });
}
const putCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const { _id, ...resto } = req.body;
    const categoriaEditada = await Categoria.findByIdAndUpdate(id, resto);
    res.json({
        msg: 'PUT API de categoria',
        categoriaEditada
    });
}
const deleteCategoria = async (req = request, res = response) => {
    const { id } = req.params;
    const categoriaEliminada = await Categoria.findByIdAndDelete(id);
    res.json({
        msg: 'DELETE API de categoria',
        categoriaEliminada
    });
}
module.exports = {
    getCategorias,
    postCategoria,
    putCategoria,
    deleteCategoria
}