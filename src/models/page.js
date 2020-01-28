// const connection = require('../config/mysql')

// exports.pagination = request => {
//     const limit = Number(request.query.perpage) || 9;
//     const page = Number(request.query.page) || 1;
//     const offset = limit * (page - 1)

//     return{
//         limit,
//         offset,
//         page
//     }
// }

// exports.getMaxPage = (page, keyword, table) => {
//     return new Promise((resolve, reject) => {
//         if(keyword != null) table += " WHERE name LIKE ?"
//         connection.query(`SELECT COUNT(*) as total FROM ${table}`, ['%' + keyword + '%'], (err, result) => {
//             if (!err) {
//                 const maxPage = Math.ceil(result[0].total / page.limit);

//                 if(maxPage >= page.page){
//                     resolve({
//                         totalProduct: result[0].total,
//                         maxPage
//                     });
//                 }else{
//                     reject(`Im sorry only until page ${maxPage}`);
//                 }
//             }
//             else reject(error);
//         });
//     });
// }