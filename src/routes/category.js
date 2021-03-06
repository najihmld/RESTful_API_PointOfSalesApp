const express = require('express');
const Route = express.Router();
const { authorization } = require("../middleware/auth");

const {getCategory, createCategory, editCategory, delCategory} = require('../controller/category')

// Route
//     // .get('/', authorization, getCategory)
//     .get('/', getCategory)
//     .post('/', authorization, createCategory)
//     .put('/:id', authorization, editCategory)
//     .delete('/:id', authorization, delCategory)

// module.exports = Route;

Route
    // .get('/', authorization, getCategory)
    .get('/', getCategory)
    .post('/', createCategory)
    .put('/:id',  editCategory)
    .delete('/:id', delCategory)

module.exports = Route;