const mongoose = require('mongoose') // 載入 mongoose
const restaurant = require('../restaurant')  //載入restaurant model
const rawData = require('../../restaurant.json') //載入restaurant資料

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true }) // 設定連線到 mongoDB

const db = mongoose.connection       // 取得資料庫連線狀態
db.on('error', () => {               // 連線異常
  console.log('mongodb error!')
})
db.once('open', () => {              // 連線成功
  restaurant.create(
    rawData.results
  )
  console.log('mongodb connected!')
})