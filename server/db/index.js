var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});


exports.addUser = function(id, user) {

  connection.query(`INSERT INTO users (id, username) VALUES ('${id}', '${user}')`, function (error, results, fields) {
    if (error) { throw error; }
  });
};


exports.addMsg = function(id, {roomname = roomname, username = username, message = message}) {
  connection.query(`INSERT INTO messages (id, roomname, username, message) VALUES ('${id}', '${roomname}', '${username}', '${message}')`, (error, results, fields) => {
    if (error) { throw error; }
  });
};

exports.retrieve = function(res, username) {
  var queryText = 'SELECT * FROM messages';
  if (username) {
    queryText += ` WHERE username = '${username}'`;
  }
  connection.query(queryText, (error, results, fields) => {
    if (error) { throw error; }
    res.end(JSON.stringify({'results': results}));
  });
};

exports.makeNew = function (data, table, callback) {
  connection.query(`SELECT COUNT(*) FROM ${table}`, function(error, results, fields) {
    if (error) { throw error; }
    callback(results[0]['COUNT(*)'] + 1, data);
  });
};

















