const express = require('express')
const Route = express.Router()
const jwt = require('jsonwebtoken')

const { createUser, loginUser } = require('../controller/auth')

Route
    .post('/register', createUser)
    .post('/login', loginUser)
module.exports = Route;
