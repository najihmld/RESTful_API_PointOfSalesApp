const { 
  getUser,
  putUser,
  deleteUser
} = require('../models/users');
const helper = require('../helper');
const bcrypt = require('bcryptjs')
const salt = bcrypt.genSaltSync(10)
const fs = require('fs')

module.exports = {
  getUser: async (request, response) => {
      const result = await getUser();
      return helper.response(response, 200, result)
  },
  editUser: async (request, response) => {
      try{
        const setData = {
            name: request.body.name,
            email: request.body.email,
            password: bcrypt.hashSync(request.body.password, salt),
            image: request.file.path
        }
        const id = request.params.id
        const result = await putUser(setData, id)
  
        return helper.response(response, 200, result)
    } catch(error){
        return helper.response(response, 404, error)
      
     
    }
  },
  delUser: async (request, response) => {
      try{
          const id = request.params.id
          const result = await deleteUser(id)
          return helper.response(response, 200, result)
      } catch (error) {
          return helper.response(response, 404, error)
      }
  }
}

