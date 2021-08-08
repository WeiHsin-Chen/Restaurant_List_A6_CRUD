// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const restaurant = require('../../models/restaurant')

// route setting for create new restaurant
router.get('/new', (req, res) => {
  return res.render('new')
})

// route setting for catch created restaurant
router.post('/', (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body
  return restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// route setting for show page
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
})

// route setting for getting edit function
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurant.findOne({ _id, userId })
    .lean()
    .then((restaurant) => res.render('edit', { restaurant }))
    .catch(error => console.log(error))
})

// route setting for posting edit function
router.put('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, name_en, category, image, location, phone, google_map, rating, description } = req.body

  return restaurant.findOne({ _id, userId })
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
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

// route setting for deletion
router.delete('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return restaurant.findOne({ _id, userId })
    .then(restaurant => restaurant.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router