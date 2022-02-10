const Book = require('./book');

// get all the books
exports.getBooks = (req, res, next) => {
  Book.find((error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json(data);
    }
  });
};

// new book
exports.newBook = (req, res, next) => {
  Book.create(req.body, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};

// edit book
exports.editBook = (req, res, next) => {
  Book.findByIdAndUpdate(req.params.id, { $set: req.body }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(201).json(data);
    }
  });
};

// delete book
exports.deleteBook = (req, res, next) => {
  Book.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data,
      });
    }
  });
};


// get book by ID
exports.getBookById = (req, res, next) => {
  Book.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
};