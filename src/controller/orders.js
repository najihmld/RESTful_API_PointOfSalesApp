const {addOrder, getOrdersData} = require('../model/orders')
const helper = require('../helper')

module.exports = {
    addOrder: async(request, response) => {
        // console.log(request.body);
        try{
            const randomId = Math.floor((Math.random() * 899999) + 100000)
            const setData = request.body
            const result = await addOrder(setData, randomId)

            // let total = null
            // for(i=0; i<result.length; i++){
            //     total += result[i]
            // }
            // let ppn = (10/100 * total)
            // newTotal = total+ppn

            // console.log(newTotal);
            
            return helper.response(response, 200, result)
        } catch(error){
            return helper.response(response, 404, error)
        }
        
    },
    getOrdersData: async(request, response) => {
        const result = await getOrdersData()
        return helper.response(response, 200, result)
        
    }
}