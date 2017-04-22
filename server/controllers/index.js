var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(res);

    },
    post: function (req, res) {
      models.messages.post(req.body);
      res.end('message added');
    }
  },

  users: {
    get: function (req, res) {
      models.messages.get(req.body, res);
    },
    post: function (req, res) {
      models.users.post(req.body);
      res.end('user added');
    }
  }
};

