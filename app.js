// require package used in the project
const express = require('express')
const app = express()
const session = require('express-session')
const exphbs = require('express-handlebars')      // set express handlebars(exphbs)
const hbshelpers = require('handlebars-helpers')  // set handlebars-helpers
const helpers = hbshelpers()
const bodyParser = require('body-parser')          // setting body-parser
const methodOverride = require('method-override')  // setting method-override
const flash = require('connect-flash')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const routes = require('./routes')                 // 引用 routes
const usePassport = require('./config/passport')


app.engine('handlebars', exphbs({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

usePassport(app)

app.use(flash())  // 掛載套件
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')  // 設定 success_msg 訊息
  res.locals.warning_msg = req.flash('warning_msg')  // 設定 warning_msg 訊息
  next()
})

app.use((req, res, next) => {
  // 你可以在這裡 console.log(req.user) 等資訊來觀察
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  next()
})

app.use(routes)

// connect mongoose setting
require('./config/mongoose')

//start and listen on the Express server
app.listen(process.env.PORT, () => {
})

