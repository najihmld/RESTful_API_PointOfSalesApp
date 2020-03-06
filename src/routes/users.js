const express = require('express');
const Route = express.Router();
const multer = require('multer')
const path = require('path')
const { authorization } = require("../middleware/auth");

const {getUser, editUser, delUser} = require('../controller/users')

// module.exports = Route;

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

Route
    // .get('/', authorization, getCategory)
    .get('/', getUser)
    .put('/:id', upload.single('image'), editUser)
    .delete('/:id', delUser)

module.exports = Route;