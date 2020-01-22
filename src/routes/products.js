const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')


// set storage engine 
const storage = multer.diskStorage({
    destination: path.join(__dirname + './../../public/images/'),
    filename: function(request, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
})


//init upload
const upload = multer({
    storage : storage
})             


const {getProducts, getProductsBy, createProducts, editProduct, delProduct} = require('../controller/products')

Route
    // .get('/', getProducts)
    .get('/', getProductsBy)
    .post('/', upload.single('image'), createProducts)
    .put('/:id', upload.single('image'), editProduct)
    .delete('/:id', delProduct)
module.exports = Route