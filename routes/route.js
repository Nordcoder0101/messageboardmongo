const controller = require("../controllers/controller")
module.exports = (app) => {
  app.get('/', controller.index)
  app.post('/createmessage', controller.createMessage)
  app.post('/createcomment/:id', controller.createComment)
}
