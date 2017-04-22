CREATE DATABASE chat;

USE chat;

-- CREATE TABLE rooms (
--   id int NOT NULL,
--   roomname text NOT NULL,
--   PRIMARY KEY (id)
-- );

CREATE TABLE users (
  id int NOT NULL,
  username text NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id int NOT NULL,
  roomname text NOT NULL,
  username text NOT NULL,
  message text NOT NULL,
  PRIMARY KEY (id)
  -- FOREIGN KEY (username) REFERENCES users(username)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


/*users
Userid-P-                 users


messages
msgId-P-        createdAt         roomId-F-       userId-F-         messages

room
roomID-P-      roomname

CREATE TABLE messages (
  id MEDIUMINT(7) NOT NULL,
  createdAt VARCHAR(50) NOT NULL,
  username VARCHAR(20) NOT NULL,
  roomname VARCHAR(20) NOT NULL,
  msg VARCHAR(144)
);

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);