const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const Homeroute = require('../routes/home.route')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', Homeroute)

app.listen(process.env.PORT, () => {
    console.log(`Server started at port ${process.env.PORT}`)
})