var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
    },
    post: function (req, res) {
      models.users.post(req.body);
    }
  },

  // rooms: {
  //   // Ditto as above
  //   get: function (req, res) {
  //    // console.log(Object.keys(req), 'get-users-controlers-req');
  //     // console.log(res, 'get-users-controlers-res');
  //   },
  //   post: function (req, res) {
  //     //console.log(req.body, 'post-users-controlers-req');
  //     // console.log(res, 'post-users-controlers-res');
  //   }
  // }
};

