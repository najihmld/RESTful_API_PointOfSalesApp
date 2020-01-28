const express = require('express')
const Route = express.Router()
const multer = require('multer')
const path = require('path')
const { authorization } = require('../middleware/auth')



// const storage = multer.diskStorage({
//     destination: function(request,file,cb) {
//         cb(null, './public/images')
//     },
//     filename: function(request, file, cb) {
//         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//     }
    
// })



// set storage engine 
const storage = multer.diskStorage({
    destination: function(request,file,cb) {
        cb(null, './public/images')
    },
    filename: function(request, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
    
})

// set filter image
const fileFilter = function(request, file, cb) {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false)
    }
    cb(null, true)
}


//init upload
const upload = multer({
    storage : storage,
    fileFilter: fileFilter
})             


const {getProducts, getProductsBy, createProducts, editProduct, delProduct} = require('../controller/products')

// Route
//     // .get('/', getProducts)
//     .get('/', authorization, getProductsBy)
//     .post('/', authorization, upload.single('image'), createProducts)
//     .put('/:id', authorization, upload.single('image'), editProduct)
//     .delete('/:id', authorization, delProduct)
// module.exports = Route

Route
    // .get('/', getProducts)
    .get('/', getProductsBy)
    .post('/', upload.single('image'), createProducts)
    .put('/:id',  upload.single('image'), editProduct)
    .delete('/:id',  delProduct)
module.exports = Route