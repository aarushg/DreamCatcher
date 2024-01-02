const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Initialize SQLite database
const db = new sqlite3.Database('./mydb.sqlite3', (err) => {
  if (err) {
    console.error(err.message);
    throw err;
  } else {
    console.log('Connected to SQLite database.');
    db.run(`CREATE TABLE IF NOT EXISTS data (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      itemId TEXT,
      title TEXT,
      responses TEXT
    )`, (err) => {
      if (err) {
        console.error(err.message);
      }
    });
  }
});

// POST endpoint to save data
app.post('/api/save-data', (req, res) => {
  const { itemId, title, responses } = req.body;
  const insert = 'INSERT INTO data (itemId, title, responses) VALUES (?,?,?)';
  db.run(insert, [itemId, title, JSON.stringify(responses)], (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      res.status(201).send('Data saved successfully');
    }
  });
});

// Additional routes here

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
