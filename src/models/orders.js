const connection = require('../config/mysql')

module.exports = {
    setIdOrder: (invoice) => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO orders SET invoice=?', invoice, (error, result) => {
                if(!error) { 
                    const newResult = {
                        invoice: invoice,
                        message: 'Successful order'
                    }
                    resolve(newResult)
                    // resolve(invoice)
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
    setTotalPrice: (total, invoice) => {                       
       return new Promise((resolve, reject) => {
           connection.query('UPDATE orders SET total=? WHERE invoice=?', [total, invoice], (error, result) => {
               if(!error){
                   resolve(result)
               } else{
                   reject(new Error(error))
               }
           })
       })
    },
    getOrdersData: () => {
        const sql = 'SELECT orders.invoice, cashier.name as cashier, orders.total, orders.updated_at as date FROM orders JOIN cashier ON orders.cashier_id=cashier.id'
        return new Promise((resolve, reject) => {
            connection.query(sql, (error, result) => {
                if(!error) {

                    resolve(result);
                } else{
                    reject(new Error(error))
                }
            })
        })
    }
}