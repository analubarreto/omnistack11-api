const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

/**
 * Tipos de parâmetros
 * 
 * Query: parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route: parâmetros utilizados para identificar recursos
 * Request body: corpo da requisição, utilziando para criar ou alterar recursos
 */

app.listen(8000)