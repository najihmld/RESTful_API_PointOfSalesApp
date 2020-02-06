const express = require('express');
const Route = express.Router();
const { authorization } = require("../middleware/auth");

const {getUser, editUser, delUser} = require('../controller/users')

// Route
//     // .get('/', authorization, getCategory)
//     .get('/', getCategory)
//     .post('/', authorization, createCategory)
//     .put('/:id', authorization, editCategory)
//     .delete('/:id', authorization, delCategory)

// module.exports = Route;

Route
    // .get('/', authorization, getCategory)
    .get('/', getUser)
    .put('/:id',  editUser)
    .delete('/:id', delUser)

module.exports = Route;