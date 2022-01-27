const { getItemOptions, getItemsOptions, postItemOptions, deleteItemOptions, updateItemOptions } = require('../models/itemSchema')
///////////////////////////////////////////////////
//////////////////////////////////////////////////
function itemRoutes(fastify, options, done) {
  //GET ALL Items
  fastify.get('/items', getItemsOptions)
  //GET Item By ID
  fastify.get('/items/:id', getItemOptions)
  //Add an Item
  fastify.post('/items', postItemOptions)
  //Delete an Item
  fastify.delete('/items', deleteItemOptions)
  //Update an Item
  fastify.put('/items', updateItemOptions)
  done()
}
///////////////////////////////////////////////
/////////////////////////////////////////////

module.exports = itemRoutes
