const mongoose = require('mongoose')
const Schema = mongoose.Schema
const comment = require('./Comment')


const messageSchema = Schema({
  author: {type: String, required: true, minlenth: 2 },
  message: {type: String, required: true, minlength: 4, maxlength: 100 },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment'}]
}, { timestamp: true })

module.exports = mongoose.model('Message', messageSchema)