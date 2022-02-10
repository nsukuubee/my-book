const express = require('express');
const router = express.Router();

const {
  getBooks,
  newBook,
  editBook,
  deleteBook,
  getBookById,
} = require('../controllers/book');

// Get Book
router.get('/', getBooks);
// new Book
router.post('/', newBook);
// Edit Book
router.put('/:id', editBook);
// Delete Book
router.delete('/:id', deleteBook);
// get Book by Id
router.get('/:id', getBookById);

module.exports = router;