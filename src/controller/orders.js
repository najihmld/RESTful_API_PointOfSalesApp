const {setIdOrder, getPrice, setDetailOrder, setTotalPrice, getOrdersData} = require('../model/orders')
const helper = require('../helper')


module.exports = {
    addOrder: async(request, response) => {
        // console.log(request.body);
        try{
            const invoice = Math.floor((Math.random() * 899999) + 100000)
            const setData = request.body
            const requestOrder = await setIdOrder(invoice)

            let total = 0
            await setData.order.map(async(element) => {
                const price = await getPrice(element.product_id)
                const newprice = {
                    ...price[0]
                }

                   const orderData = {
                       order_id: requestOrder,
                       product_id: element.product_id,
                       qty: element.qty,
                       subtotal: newprice.price*element.qty
                   }
                   await setDetailOrder(orderData)

                   total += newprice.price*element.qty
                   await setTotalPrice(requestOrder, total)     
                  
                     
            })

            return helper.response(response, 200, requestOrder)
        } catch(error){
            return helper.response(response, 404, error)
        }
        
    },
    getOrdersData: async(request, response) => {
        const result = await getOrdersData()
        return helper.response(response, 200, result)
        
    }
}