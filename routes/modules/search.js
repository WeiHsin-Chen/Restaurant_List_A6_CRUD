// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Todo model
const restaurant = require('../../models/restaurant')

// route setting for search not yet
router.get('/', (req, res) => {
  const userId = req.user._id
  const keyword = req.query.keyword.toLowerCase().trim()
  const sortBy = req.query.sortBy || '_id'
  return restaurant.find({ userId })
    .lean()
    .sort(sortBy)
    .then((restaurantList) => {
      const filteredRestaurants = restaurantList.filter(restaurant =>
        restaurant.name.toLowerCase().trim().includes(keyword))
      res.render('index', { restaurants: filteredRestaurants, keyword, sortBy })
    })
    .catch(error => console.log(error))
})

// 匯出路由模組
module.exports = router