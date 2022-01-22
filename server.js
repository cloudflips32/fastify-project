const fastify = require('fastify')({logger: true})
const dotenv = require('dotenv');

const PORT = process.env.PORT 

fastify.get('/items', (req,res) => {
  reply.send({ test: 'Hello, Tester!'})
})

const start = async() => {
  try {
    await fastify.listen(PORT)
  } catch (error) {
    fastify.log.error(error)
    process.exit(1)
  }
}

start()