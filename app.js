// require package used in the project
const express = require('express')
const app = express()
const port = 3000
const exphbs = require('express-handlebars')      // set express handlebars(exphbs)
const hbshelpers = require('handlebars-helpers')  // set handlebars-helpers
const helpers = hbshelpers()
const bodyParser = require('body-parser')          // setting body-parser
const methodOverride = require('method-override')  // setting method-override
const routes = require('./routes')                 // 引用 routes


app.engine('handlebars', exphbs({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))              // setting static files
app.use(methodOverride('_method'))
app.use(routes)


// connect mongoose setting
require('./config/mongoose')

//start and listen on the Express server
app.listen(port, () => {
})

