const connection = require('../config/mysql')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)

module.exports = {
    createUser: setData => {
        console.log(setData.password);
        
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO cashier SET ?', setData, (error, result) => {
                if(!error){
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    delete newResult.password
                    resolve(newResult)
                } else{
                    reject(new Error(error))
                }
            })
        })
    },
    loginUser: data => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM cashier WHERE email =?', data.email, (error, result) => {
                if(!error){
                    bcrypt.compare(data.password, result[0].password).then((result) => {
                        if (result !== false) {
                            delete data.password
                            const newResult = {
                                ...data
                            }
                            resolve(newResult)
                        } else {
                            reject(new Error(error))
                        }
                    })
                } else{
                    reject(new Error(error))
                }
            })
        })
    }
}