const express = require('express')
const app = express()
const PORT = 8080
const client = require('./db/client')
client.connect()
const bodyParser = require('body-parser')
app.use(bodyParser.json())


//base route that returns hello world
app.get('/', (req, res) => {
    res.send('Hello World!')
})

//router adding /api prefix
app.use('/api', require('./api'))

//listen to port
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})