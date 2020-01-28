const express = require('express')
const Route = express.Router()

const category = require('./routes/category')
const products = require('./routes/products')
const orders = require('./routes/orders')
const auth = require('./routes/auth')


Route

    .use('/category', category)
    .use('/products', products)
    .use('/orders', orders)
    .use('/auth', auth)

module.exports = Route;
