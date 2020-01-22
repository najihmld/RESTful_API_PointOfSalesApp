const express = require('express')
const Route = express.Router()

const { addOrder, getOrdersData } = require('../controller/orders')

Route
    .post('/', addOrder)
    .get('/', getOrdersData)

module.exports = Route