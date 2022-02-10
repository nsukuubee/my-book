const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

// init app
const app = express();
// db URL
const DB_URL = process.env.DB_URL || 'mongodb+srv://Loraine:7r0rsVfsxVYOpMsG@cluster0.bxotl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
// getting the Port ,if port is not available port 3000 will be used
const PORT = process.env.PORT || 3000;
// routes
const bookRoute = require('./routes/book');

// log
app.use(morgan('dev'));
// use cross origine access
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// use routes
app.use('/book', bookRoute);

mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    //useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(
    () => console.log('Database connected'),
    (error) => console.log('Database error: ' + error)
  );

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).json({ error: err.message });
});

app.listen(PORT, () => console.log(`App listening on port:${PORT}`));