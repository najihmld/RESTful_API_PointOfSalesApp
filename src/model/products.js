const connection = require('../config/mysql')
const fs = require('fs')

module.exports = {
    // getProducts: (name) => {
    //     return new Promise((resolve, reject) => {
    //         if(name){
    //             connection.query('SELECT * FROM products WHERE name=?', name, (error, result) => {
    //                 if(!error){
    //                     resolve(result)
    //                     console.log(name);
                        
    //                 } else{
    //                     reject(error)
    //                 }
    //             })
    //         } else{
    //             connection.query('SELECT * FROM products', (error, result) => {
    //                 if(!error){
    //                     resolve(result)
    //                 } else{
    //                     reject(error)
    //                 }
    //             })
    //         }
     
    //     })
    // },
    getProductsBy: (cond) => {
        return new Promise((resolve, reject) => {
            let find = ''
            let limit = ''
            let sort = ''
            
            if (cond.p) {
                find = ` WHERE name LIKE '%${cond.p}%'` 
            } 
            if(cond.page){
                limit =  ` LIMIT ${cond.page}`
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
                        console.log('Image deleted');
                    })
                } else{
                    console.log('Success');
                    
                }
                connection.query('DELETE from products WHERE id=?', id, (error, result) => {
                    if(!error){
                        const newResult = {
                            id: id
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