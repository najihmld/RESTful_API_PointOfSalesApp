const connection = require('../config/mysql')
const fs = require('fs')
const { getMaxpage } = require('./page')

module.exports = {
    getProductsBy: (cond) => {
        return new Promise((resolve, reject) => {
            let find = ''
            let limit = ''
            let sort = ''
            
            if (cond.name) {
                find = ` WHERE name LIKE '%${cond.name}%'` 
            } 
            if(cond.limit){
                limit =  ` LIMIT ${cond.limit}`
            }
            if(cond.sortby){
                sort = ` ORDER BY ${cond.sortby}`
            } 
            let query = 'SELECT * FROM products'+find+sort+limit
         
            connection.query(query, (error, result) =>{
                if (!error){
                    resolve(result)
                } else {
                    reject(new Error(error))
                }
            } )
        })
    },
    postProducts: (setData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO products SET ?', setData, (error, result) => {
                if(!error) {
                    const newResult = {
                        id: result.insertId,
                        ...setData
                    }
                    resolve(newResult)
                
                } else {
                    reject(new Error(error));
                }
                
            })
        })
    },
    putProducts: (setData, id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT image FROM products WHERE id=?', id, (error, result) => {
                const image = result[0].image
                if(image != ''){
                    fs.unlink(image, error => {
                        if(error) throw error
                        console.log('Image deleted');
                    })
                    
                } else{
                    console.log('Success');
                    
                }
                connection.query('UPDATE products SET ? WHERE id=?', [setData, id], (error, result) => {
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

            
            
        })
    },
    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT image FROM products WHERE id=?', id, (error, result) => {
                const image = result[0].image
                if(image != ''){
                    fs.unlink(image, error => {
                        if(error) throw error
                    })
                }
                connection.query('DELETE from products WHERE id=?', id, (error, result) => {
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
            
        })
    }
}