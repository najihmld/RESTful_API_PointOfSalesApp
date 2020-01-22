const connection = require('../config/mysql')

module.exports = {
    addOrder: (setData, randomId) => {  
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO orders SET id=?', randomId, (error, result) => {
                if(!error){
                    const getSubtotal = []
                    setData.orders.map( item => {
                       const orderData = {
                            order_id: randomId,
                            product_id: item.product_id,
                            qty: item.qty,
                            subtotal: item.qty*item.subtotal
                                               
                        }

                        getSubtotal.push(orderData.subtotal)

                        if(item.qty > 0){
                            connection.query('INSERT INTO order_details SET ?', orderData , (error, result) => {
                                if(!error){

                                    resolve(setData)

    
                                }else{
                                    reject(new Error(error))
                                }
                            })
                        } else{
                            reject(new Error(error))
                            
                        }
          
                    });


                    const sum = getSubtotal.reduce((total, value) => total + value, 0);
                    const getTotal = (10/100 * sum) + sum
                    console.log(getTotal);


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
                    resolve(result);
                } else{
                    reject(new Error(error))
                }
            })
        })
    }
}