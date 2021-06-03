const mongoose = require('mongoose')
const Schema = mongoose.Schema
const image_root = 'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file'

const restaurantSchema = new Schema({
  id: mongoose.ObjectId,

  name: {
    type: String, // 資料型別是字串
    required: true // 這是個必填欄位
  },

  name_en: String,

  category: String,

  image: {
    type: String,
    get: v => `${image_root}${v}`  //'https://assets-lighthouse.s3.amazonaws.com/uploads/image/file + ${v}'
  },

  location: String,

  phone: String,

  google_map: {
    type: String,
    get: v => `${v}`
  },

  rating: Number,

  description: String
})
module.exports = mongoose.model('Todo', restaurantSchema)