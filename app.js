// require package used in the project
const express = require('express')
const app = express()
const port = 3000

// set express handlebars(exphbs)

const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultlayout: 'main' }))
app.set('view engine', 'handlebars')

// set Mongoose
const mongoose = require('mongoose') // 載入 mongoose
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection       // 取得資料庫連線狀態
db.on('error', () => {               // 連線異常
  console.log('mongodb error!')
})
db.once('open', () => {              // 連線成功
  console.log('mongodb connected!')
})

// read models seeder
const restaurants = require('./models/restaurant')

// setting static files
app.use(express.static('public'))

//route setting with models seeder connection
app.get('/', (req, res) => {
  restaurants.find()
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

//route setting for show page
app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

//route setting for search
app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurants = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: keyword })
})

//start and listen on the Express server
app.listen(port, () => {
})


