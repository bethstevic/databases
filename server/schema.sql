CREATE DATABASE chat;

USE chat;


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
);


