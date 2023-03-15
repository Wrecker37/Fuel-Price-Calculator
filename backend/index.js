const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');
const profileRouter = require('./routes/profile');
const quoteRouter = require('./routes/quote');

const app = express();
const port = 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/user', userRouter);
app.use('/profile', profileRouter);
app.use('/quote', quoteRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// app.post("post_login", (req, res) => {
//   let {username, password} = req.body
//   console.log(username, password)
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});