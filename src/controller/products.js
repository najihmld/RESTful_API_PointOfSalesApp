const {getProducts, postProducts, putProducts, deleteProduct, getProductsBy} = require('../models/products')
const helper = require('../helper')
// const { pagination } = require('../models/page')


module.exports = {
    // getProducts: async (request, response) => {
    //     const page = pagination(request)
    //     try{
    //         const result = await getProducts(request, page)
    //         return helper.response(response, 200, result)
    //     } catch(error){
    //         return helper.response(response, 404, error)
    //     }

    // },
    getProductsBy: async (request, response) => {
        try{
            const cond = {
                name: request.query.name,
                // limit: request.query.limit,
                page: request.query.page,
                sortby: request.query.sortby,
                category: request.query.category
            }
            const result = await getProductsBy(cond)
            return helper.response(response, 200, result)
        } catch(error) {
            return helper.response(response, 404, error)
        }
    },
    createProducts: async (request, response) => {
        try {
            const setData = {
                name: request.body.name,
                price: request.body.price,
                description: request.body.description,
                image: request.file.path,
                id_category: request.body.id_category
            }
            const result = await postProducts(setData)
            return helper.response(response, 200, result)
        } catch (error) {
            // return helper.response(response, 404, error)
            throw error
        }
    },
    editProduct: async (request, response) => {
        try{
            const setData = {
                name: request.body.name,
                price: request.body.price,
                description: request.body.description,
                image: request.file.path,
                id_category: request.body.id_category
            }
            const id = request.params.id
            const result = await putProducts(setData, id);
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 404, error)
        }
    },
    delProduct: async (request, response) => {
        try{
            const id = request.params.id
            const result = await deleteProduct(id)
            return helper.response(response, 200, result)
        } catch (error) {
            return helper.response(response, 404, error)
        }
    }
}
