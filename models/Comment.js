const mongoose = require('mongoose')
const Schema = mongoose.Schema


const commentSchema = Schema({
  author: {type: String, required: true, minlength: 2},
  comment: {type: String, require: true, minlength: 5, maxlength: 100}
}, {timestamp: true})

module.exports = mongoose.model('Comment', commentSchema)