const connectToMongo = require('./db');
const express = require('express');

const app = express();

const port = 3000;

//middleware to use requets body
app.use(express.json());

connectToMongo();

//available routes
app.use('/api/notes', require('./routes/notes'));
app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});