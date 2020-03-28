const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => {
  const params = request.params

  return response.json({ 
    evento: 'Semana OmniStack 11.0',
    aluno: 'Ana Luiza'
  })
})

module.exports = routes;