const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(cors({
  origin: 'http://localhost:5000' // which apps will be able to access our app
}))
app.use(express.json())
app.use(routes)

app.listen(8000)