const path = require('path')
const express = require('express')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

const port = process.env.PORT || 8080
const server = app.listen(port, function() {
  console.log(`Listening on port ${port}`)
})