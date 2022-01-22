const {getItems, getItem, addItem, deleteItem} = require('../controllers/items')

// Item Schema
const Item = {
  type: 'object',
  properties: {
    id: {type: 'string'},
    name: {type: 'string'}
    },
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
      200: Item,
      },
    },
    handler: getItem
  }

  const postItemOptions = {
    schema: {
      body: {
        type: 'object',
        required: ['name'],
        properties: {
          name: { type: 'string' },
        }
      },
      response: {
        201: Item,
        },
      },
      handler: addItem
    }

    const deleteItemOptions = {
      schema: {
        response: {
          200: {
            type: 'object',
            properties: {
              message: {type: 'string'}
            },
          },
          },
        },
        handler: deleteItem
      }
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
  
  done()
}
///////////////////////////////////////////////
/////////////////////////////////////////////

module.exports = itemRoutes
