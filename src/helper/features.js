// //Sort Product By
// module.exports.sorting = (request, sql) => {
//     let orderBy = request.query.orderBy
//     let sortBy = request.query.sortBy

//     if(orderBy == 'name') {
//         sql += `ORDER BY product.name`
//     } else if(orderBy == 'category') {
//         sql += `ORDER BY category.name`
//     } else if(orderBy == 'updated') {
//         sql += `ORDER BY products.updated`
//     } else {
//         sql += `ORDER BY products.id`
//     }

//     if(orderBy != null) {
//         if(sortBy == 'ASC' || 'DESC') {
//             sql += 'ASC'
//         } else if(sortBy == 'DESC') {
//             SQL += 'DESC'
//         }
//     }

//     return sql
    
// }