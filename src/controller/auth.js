const { createUser, loginUser } = require('../models/auth')
const helper = require('../helper')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)


module.exports = {
    createUser: async(request, response) => {
        try{
            const setData = {
                name: request.body.name,
                email: request.body.email,
                password: bcrypt.hashSync(request.body.password, salt)
            }
            const result = await createUser(setData)
            return helper.response(response, 200, result)
        } catch(error){
            return helper.response(response, 404, error)
        }
    },
    loginUser: async(request, response) => {
        try{
            const data = {
                email: request.body.email,
                password: request.body.password
            }    
                   
            const result = await loginUser(data)
            const token = jwt.sign({ result }, '230798', { expiresIn: '1h' })    
            return helper.response(response, 200, {token, ...result})
        } catch(error){
            return helper.response(response, 404, error)
        }
    }
}