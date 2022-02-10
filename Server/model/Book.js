const mongoose = require('mongoose');

// Book model
const bookSchema = new mongoose.Schema({
    title: {
      type: String
    },
    auther: {
      type: String
    },
    description: {
      type: String
    }
  }, {
    image: 'books'
  });

module.exports = mongoose.model('Book', bookSchema);