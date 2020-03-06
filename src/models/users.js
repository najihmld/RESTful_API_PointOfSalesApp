const connection = require('../config/mysql');
const fs = require('fs')

module.exports = {
    getUser: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM cashier', (error, result) => {
                if(!error){
                    resolve(result);
                } else {
                    reject(new Error(error));
                }
            })
        })
    },
    putUser: (setData, id) => {
        return new Promise((resolve, reject) => {
          
                connection.query('UPDATE cashier SET ? WHERE id=?', [setData, id], (error, result) => {
                    if(!error){
                        const newResult = {
                            id: result.id,
                            ...setData
                        }
                        // console.log(setData); 
                        resolve(newResult)
                    } else{
                        reject(new Error(error))
                    }
                })
            
        })
    },
    deleteUser: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('DELETE from cashier WHERE id=?', id, (error, result) => {
                if(!error){
                    const newResult = {
                        id: id,
                        message: 'Success deleted!'
                    }
                    resolve(newResult);
                } else{
                    reject(new Error(error));
                }
            })
        })
    }
    
}