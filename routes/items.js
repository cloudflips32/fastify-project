const {getItems, getItem} = require('../controllers/items')

// Item Schema
const Item = {
  type: 'object',
  properties: {
    id: {type: 'string'},
    name: {type: 'string'}
    }
  }

  // Options for get all items
const getItemsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: Item,
      },
    },
  },
  handler: getItems
}

  // Options to get one item
const getItemOptions = {
  schema: {
    response: {
      200: Item
      },
    },
    handler: getItem
  }

function itemRoutes(fastify, options, done) {
  //GET ALL Items
  fastify.get('/items', getItemsOptions)
  //GET Item By ID
  fastify.get('/items/:id', getItemOptions)
  done()
}

module.exports = itemRoutes
