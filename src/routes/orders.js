const express = require('express')
const Route = express.Router()
const { authorization } = require("../middleware/auth");


const { addOrder, getOrdersData } = require('../controller/orders')

Route
    .post('/', authorization, addOrder)
    .get('/', authorization, getOrdersData)

module.exports = Route