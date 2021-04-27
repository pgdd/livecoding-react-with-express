const express = require('express')
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express()
const port = 8000

app.use(bodyParser.json())
app.use(cors())

const albums = []

app.get('/', (req, res) => {
//   albums.push({})
  res.send('Hello')
})

app.post('/albums', (req, res) => {
    console.log("yo")
    console.log(req.body)
      albums.push(req.body)
      res.send('Saved')
})

app.get('/albums', (req, res) => {
    //   albums.push({})
      res.send(albums)
})

app.get('/albums/:index', (req, res) => {
    //   albums.push({})
      console.log(req.params)
      res.send(albums)
})

// CRUD 


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})