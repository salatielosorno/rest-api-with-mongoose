const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const routes = require('./routes')
const mongoose = require('mongoose')
const errorhandler = require('errorhandler')

const app = express();

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/edx-lab', { useNewUrlParser: true, useFindAndModify: false })

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(routes)
app.use(errorhandler())

let port = process.env.PORT || 3000
app.listen(port, () => { console.log(`Listening on port ${port}`) })