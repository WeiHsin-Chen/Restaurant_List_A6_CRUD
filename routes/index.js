// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()
const home = require('./modules/home')  // 引入 home 模組程式碼
const restaurants = require('./modules/restaurants')   // 引入 restaurants 模組程式碼
const search = require('./modules/search')   // 引入 search 模組程式碼
const users = require('./modules/users')   // 引入 users 模組程式碼


router.use('/restaurants', restaurants)
router.use('/search', search)
router.use('/users', users)
router.use('/', home)

// 匯出路由器
module.exports = router