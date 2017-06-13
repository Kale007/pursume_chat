const db = require('../');

const Chat = db.Model.extend({
  tableName: 'chat'
});

module.exports = db.model('Chat', Chat);