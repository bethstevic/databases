var models = require('../models');

// var headers = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'Content-Type, accept, X-Requested-With',
//   'access-control-max-age': 10 // Seconds.
//   // 'Content-Type': 'text/plain'
// };


module.exports = {
  messages: {
    get: function (req, res) {
      // res.writeHead(200, headers);
      models.messages.get(res);

    },
    post: function (req, res) {
      // res.writeHead(200, headers);
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        console.log(data);
        models.messages.post(JSON.parse(data));
      });
      // console.log(req);
      res.end('message added');


    }
  },

  users: {
    get: function (req, res) {
      // res.writeHead(200, headers);
      models.messages.get(req.body, res);
    },
    post: function (req, res) {
      // res.writeHead(200, headers);
      // res.writeHead(200, headers);
      var data = '';
      req.on('data', function(chunk) {
        data += chunk;
      });
      req.on('end', function() {
        console.log(data);
        models.users.post(JSON.parse(data));
      });
      res.end('users added');

    }
  }
};

