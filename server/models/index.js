var db = require('../db');


module.exports = {
  messages: {
    get: function (res) {
      db.retrieve(res);
    },
    post: function (obj) {
      //console.log(obj, 'messages');
      db.makeNew(obj, 'messages', db.addMsg);
    }
  },

  users: {
    get: function (body, res) {
      db.retrieve(res, body.username);
    },
    post: function (obj) {
      //console.log(obj, 'users');
      db.makeNew(obj.username, 'users', db.addUser);
    }
  }
};

