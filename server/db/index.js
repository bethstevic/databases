var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var newConnection = function() {
  return mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'chat'
  });
};


exports.addUser = function(id, user) {
  var connection = newConnection();
  connection.connect();
  connection.query(`INSERT INTO users (id, username) VALUES ('${id}', '${user}')`, function (error, results, fields) {
    if (error) throw error;
  });

  connection.end();
};


exports.addMsg = function(id, {room = roomname, user = username, message = message}) {
  var connection = newConnection();
  connection.connect();
  console.log(room, user, message);
  connection.query(`INSERT INTO messages (id, roomname, username, message) VALUES ('${id}', '${room}', '${user}', '${message}')`, (error, results, fields) => {
    if (error) console.log(error);

  });
  connection.end();
};

// exports.addRoom = function(id, roomName) {
//   connection.query(`INSERT INTO users (id, roomname) VALUES ('${id}', '${roomName}')`, function (error, results, fields) {
//     if (error) throw error;
//   });
//   connection.end();
// };

exports.makeNew = function (data, table, callback) {
  var connection = newConnection();
  connection.connect();
  connection.query(`SELECT COUNT(*) FROM ${table}`, function(error, results, fields) {
    if (error) throw error;
    // console.log(results);
    // var count = results[0]['COUNT(*)'];
    callback(results[0]['COUNT(*)'], data);

  });

  connection.end();
};