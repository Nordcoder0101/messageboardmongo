const Message = require('../models/Message')
const Comment = require('../models/Comment')

module.exports = {
  index: function(req, res){
    // Message.find({}, (err, messages) =>{
    //   if (err){
    //     console.log('There are errors')
    //   } else {
    //     console.log(messages)
    //     res.render('index', {messages: messages})
    //   }
    // })    
    Message.find({})
    .populate('comments')
    .exec((err, messages) =>{
      console.log(messages)
      res.render('index', { messages: messages })
    })
    
    
  },

  createMessage: function(req, res) {
    let newMessage = new Message(req.body)
    console.log(newMessage)
    newMessage.save((err)=>{
      if (err){
        console.log('There was an error saving the message', err)
        res.redirect("/")
      } else {
        res.redirect("/")
      }
    })
  },

  createComment: function(req, res) {
    
    let newComment = new Comment(req.body)
    // console.log('body of comment', (newComment))
    newComment.save((err, comment) => {
      if (err) {
        console.log('There was an error saving the message')
        res.redirect("/")
      } else {
        console.log(req.params, 'the params')
        Message.findOne({_id: req.params.id}, (err, message)=>{
          console.log(message, 'LAST THING I LOG')
          message.comments.push(comment)
          message.save((err)=>{
            res.redirect("/")
          })
        })
        
      }
    })
  }

}
