const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(
  './gallery.db',
  sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE,
  (e: Error) => {
    if (e) {
      return console.error(e.message);
    }
    console.log('Connected to the SQlite database.');
  },
);
