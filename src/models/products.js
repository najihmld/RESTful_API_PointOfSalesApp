const connection = require('../config/mysql')
const fs = require('fs')
const { getMaxpage } = require('./page')

module.exports = {
    getProductsBy: (cond) => {
        return new Promise((resolve, reject) => {
            let find = ''
            let cat = ''
            let limit = ' LIMIT 0,8'
            let sort = ''
            

            
            if (cond.name) {
                find = ` WHERE name LIKE '%${cond.name}%'` 
            } 
            if (cond.category) {
                cat = ` WHERE id_category LIKE ${cond.category}` 
            } 
            // if(cond.limit){
            //     limit =  ` LIMIT ${cond.limit}`
            // }
            if(cond.page){
                let a = (cond.page-1)*8
                let b = 8
                limit = ` LIMIT ${a},${b}`
            }
            if(cond.sortby){
                sort = ` ORDER BY ${cond.sortby}`
            }
            


            let query = 'SELECT * FROM products'+find+cat+sort+limit
         
            connection.query(query, (error, result) =>{
                if (!error){
                    console.log('SELECT COUNT(*) as totalResult FROM products'+find+sort+limit);
                    
                    let query2 = 'SELECT COUNT(*) as totalResult FROM products'+find+sort
                    connection.query(query2, (error2, result2) => {
                        let finalResult = {
                            totalItems: result2[0].totalResult,
                            items: result 
                        }
                        resolve(finalResult)
                    })
                } else {
                    reject(new Error(error))
                }
            } )
        })
    },
    postProducts: (setData) => {
        return new Promise((resolve, reject) => {
            console.log(setData)
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