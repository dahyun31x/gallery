const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database, and if it doesn't exist, create it
const db = new sqlite3.Database(
  './gallery.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (err) => {
    // Error handling for connection
    if (err) {
      return console.error(err.message);
    } else {
      // Success message for successful connection
      console.log('Connected to the SQLite database.');
    }
  },
);

const createTableQuery = `
 CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY,
  name VARCHAR,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS dev_logs (
  id INTEGER PRIMARY KEY,
  title VARCHAR,
  body TEXT,
  user_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS book_reports (
  id INTEGER PRIMARY KEY,
  title VARCHAR,
  body TEXT,
  user_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id)
);
`;

db.serialize(() => {
  db.run(createTableQuery, (err) => {
    if (err) {
      return console.error(err.message);
    }
    console.log('Created user, dev_logs, book_reports table');
  });
});
