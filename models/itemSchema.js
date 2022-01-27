const {getItems, getItem, addItem, deleteItem, updateItem} = require('../controllers/items')

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

const updateItemOptions = {
  schema: {
    response: {
      200: Item,
      },
    },
    handler: updateItem
  }

module.exports = {
  getItemOptions,
  getItemsOptions,
  postItemOptions,
  deleteItemOptions,
  updateItemOptions
}