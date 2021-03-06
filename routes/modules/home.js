// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引用 Restaurant model
const restaurant = require('../../models/restaurant')

// route setting with models seeder connection
router.get('/', (req, res) => {
  const userId = req.user._id
  restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.error(error))
})

module.exports = router