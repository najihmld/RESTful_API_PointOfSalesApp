const express = require('express');
const Route = express.Router();

const {getCategory, createCategory, editCategory, delCategory} = require('../controller/category')

Route
    .get('/', getCategory)
    .post('/', createCategory)
    .put('/:id', editCategory)
    .delete('/:id', delCategory)

module.exports = Route;