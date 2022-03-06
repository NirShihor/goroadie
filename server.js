require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/fibonacciRoutes')

const app = express()

app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/', routes)
app.use('/result', routes)

app.get('', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

const port = process.env.PORT || 3000

app.listen(port, console.log(`Server started on port ${port}`))