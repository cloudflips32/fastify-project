const fastify = require('fastify')({logger: true})
fastify.register(require('./routes/items'))
const dotenv = require('dotenv')

const PORT = process.env.PORT 

const start = async() => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()