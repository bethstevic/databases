var db = require('../db');


module.exports = {
  messages: {
    get: function () {}, // a function which produces all the messages
    post: function (obj) {
      // db.makeNew({id_rooms: 1, id_users: 1, message: 'asdf', msgDate: 'asdf'}, 'messages', db.addMsg);
      db.makeNew(obj, 'messages', db.addMsg);
    }
  },

  users: {
    // Ditto as above.
    get: function (obj) {

    },
    post: function (obj) {
      db.makeNew(obj.username, 'users', db.addUser);
      //console.log('modelssss');
    }
  }
  // rooms: {
  //   get: function () {}, // a function which produces all the messages
  //   post: function (obj) {
  //     db.makeNew(obj.roomname, 'users', db.addRoom);
  //   } // a function which can be used to insert a message into the database
  // },
};

//defines the messages and users model that the application uses