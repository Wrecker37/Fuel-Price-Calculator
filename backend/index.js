const express = require('express');
const cors = require('cors');

const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/user', userRouter);

app.get('/', (req, res) => {
  res.send('Hello World!');
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});