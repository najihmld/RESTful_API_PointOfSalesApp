const express = require('express')
const Route = express.Router()

const category = require('./routes/category')
const products = require('./routes/products')
const orders = require('./routes/orders')


Route

    .use('/category', category)
    .use('/products', products)
    .use('/orders', orders)

module.exports = Route;
