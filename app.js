// require package used in the project
const express = require('express')
const app = express()
const port = 3000

// read models seeder
const restaurant = require('./models/restaurant')

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

// setting body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// setting static files
app.use(express.static('public'))

// setting method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

// 引用 routes
const routes = require('./routes')
app.use(routes)


// route setting for create new restaurant
app.get('/restaurants/new', (req, res) => {
  return res.render('new')
})

// route setting for catch created restaurant
app.post('/restaurants', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// route setting for show page
app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// route setting for getting edit function
app.get('/restaurants/:id/edit', (req, res) => {
  const id = req.params.id
  return restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// route setting for posting edit function
app.put('/restaurants/:id', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description

  return restaurant.findById(id)
    .then(restaurantEdit => {
      restaurantEdit.name = name
      restaurantEdit.name_en = name_en
      restaurantEdit.category = category
      restaurantEdit.image = image
      restaurantEdit.location = location
      restaurantEdit.phone = phone
      restaurantEdit.google_map = google_map
      restaurantEdit.rating = rating
      restaurantEdit.description = description

      return restaurantEdit.save()
    })
    .then(() => res.redirect(`/restaurants/${id}`))
    .catch(error => console.log(error))
})

// route setting for deletion
app.delete('/restaurants/:id', (req, res) => {
  const id = req.params.id
  return restaurant.findById(id)
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// route setting for search not yet
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase().trim()

  return restaurant.find()
    .lean()
    .then((restaurantList) => {
      const filteredRestaurants = restaurantList.filter(restaurant => {
        return restaurant.name.toLowerCase().trim().includes(keyword)
      })
      res.render('index', { restaurants: filteredRestaurants })
    })
    .catch(error => console.log(error))
})

//start and listen on the Express server
app.listen(port, () => {
})

