# U3.W7: Intro to SQLite

## Release 0: Create a dummy database

sqlite3 dummy.db

## Release 1: Insert Data 
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(64) NOT NULL,
  last_name  VARCHAR(64) NOT NULL,
  email VARCHAR(128) UNIQUE NOT NULL,
  created_at DATETIME NOT NULL,
  updated_at DATETIME NOT NULL
);

## Release 2: Multi-line commands
INSERT INTO users
(first_name, last_name, email, created_at, updated_at)
VALUES
('Kimmey', 'Lin', 'kimmy@devbootcamp.com', DATETIME('now'), DATETIME('now'));
(first_name, last_name, email, created_at, updated_at)
VALUES
('Matthew', 'Hein', 'mvernhein@gmail.com', DATETIME('now'), DATETIME('now'));

## Release 3: Add a column
ALTER TABLE users ADD COLUMN nickname VARCHAR(64);

## Release 4: Change a value
UPDATE users SET first_name = 'Kimmy' WHERE id = 1
UPDATE users SET nickname = 'Ninja Coder' WHERE id = 1
UPDATE users SET nickname = 'Vern' WHERE first_name = 'Matthew'

## Release 5: Reflect
I am agitated at how annoying it can be to create a table in the command line. I would type all of the information for the table to find out I had an typo in one spot. That happened three times! And of corse, I messed up when creating the new column for the table, so I had to delete and remake the whole file! It feels like I'm using IRB to write a program instead of a text editor, and I hope there is an better way to do this. Other than that, the syntax was not too hard to learn. I had to look up a few things, but was able to understand the concepts. 