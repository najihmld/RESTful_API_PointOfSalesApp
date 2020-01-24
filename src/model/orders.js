const connection = require('../config/mysql')

module.exports = {
    setIdOrder: (invoice, total) => {
 
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO orders SET id=?', invoice, (error, result) => {
                if(!error) { 
                    const newResult = {
                        invoice: invoice,
                        message: 'Successful order'
                    }
                    resolve(newResult)
                } else {
                    reject(new Error(error));
                }
                
            })
        })        
    },
    getPrice: (product_id) => {     
        return new Promise((resolve, reject) => {
            connection.query('SELECT price FROM products WHERE id=?', product_id, (error, result) => {
                if(!error){
                    resolve(result)
                }else{
                    reject(new Error(error))
                }
            })
        })
    },
    setDetailOrder: (orderData) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO order_details SET ?', orderData, (error, result) => {
                if(!error){
                    resolve(result)
                } else{new Error(error)}
            })
        })
    },
    setTotalPrice: (requestOrder, total) => {                
       return new Promise((resolve, reject) => {
           connection.query('UPDATE orders SET total=? WHERE id=?', [total, requestOrder], (error, result) => {
               if(!error){
                   resolve(result)
               } else{
                   reject(new Error(error))
               }
           })
       })
    },
    getOrdersData: () => {
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM orders', (error, result) => {
                if(!error) {
                    // const newResult = {
                    //     invoice:
                    // }
                    resolve(newResult);
                } else{
                    reject(new Error(error))
                }
            })
        })
    }
}