const express = require('express')
const app = express()
const port = 3000

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.use(
  express.urlencoded({
    extended: true,
  }),
)

app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(`${basePath}/index.html`)
})

app.get('/users/add', (req, res) => {
  res.sendFile(`${basePath}/userform.html`)
})

app.post('/users/save', (req, res) => {
  console.log(req.body)
  const name = req.body.name
  const age = req.body.age

  console.log(`O nome do usuário(a) é ${name} e ele(a) tem ${age} anos`)
  res.sendFile(`${basePath}/userform.html`)
})

app.listen(port, () => {
  console.log(`App rodando na porta:${port}`)
})