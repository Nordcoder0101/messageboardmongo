const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const session = require('express-session')

const MONGODB_URI = 'mongodb://localhost/#*#*#*#*#*#'
mongoose.connect(MONGODB_URI)
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000}
}))

const path = require('path')
app.use(express.static(path.join(__dirname, './static')))

app.set('views', path.join(__dirname, './views'))
app.set('view engine', 'ejs')

const route = require('./routes/route')(app)

app.listen(8000, ()=> console.log('listening on port 8000'))
