const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const quoteRouter = require('./routes/quote');

const connection = require('./db');


const app = express();
const port = 8080;

const corsOptions = {
  origin: 'http://localhost:3000', // Allow only the frontend origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  credentials: true, // Allow cookies
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/quote', quoteRouter);

app.get('/', async (req, res) => {
  connection.query('SELECT * FROM User', (err, rows, fields) => {
    if (err) throw err;
    console.log(rows[0].userID);
  });
  res.send('Hello World!');
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = app;