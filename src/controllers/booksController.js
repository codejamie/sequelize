const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// Get all books in db
const listBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(201).json({ books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// Get a specific book by it's title
const getBookByTitle = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { title: req.params.title } });

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// Get a specific book by it's unique id
const getBook = async (req, res) => {
  try {
    const book = await Book.findOne({ where: { id: req.body.id } });

    res.status(200).json({ book });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// Edit and update a book
const editBook = async (req, res) => {
  try {
    const id  = req.query.id //req.params;
    const body = req.body;

    const editedBook = await Book.update(body, {
      where: { id: id },
    });

    if (editedBook) {
      return res.status(200).json({ book: editedBook });
    } else {
      return res.status(422).json({ message: "Unprocessable Content" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a specific book by id 
const deleteBook = async (req, res) => {
  try {
    const id = req.query.id;
    const deletedBook = await Book.destroy({
      where: { id: id },
    });
    if (deletedBook) {
      return res.status(200).json({ message: "Book deleted successfully" });
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a specific book by title 
const deleteBookByTitle = async (req, res) => {
  try {
    const title = req.query.title;
    const deletedBook = await Book.destroy({
      where: {title: title}
    });

    if (deletedBook) {
      return res.status(200).json({ message: "Book deleted successfully" });
    } else {
      return res.status(404).json({ message: "Book not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete all books
const deleteAllBooks = async (req, res) => {
  try {
    const deletedBooks = await Book.destroy({
      where: {},
    });

    if (deletedBooks) {
      return res
        .status(200)
        .json({ message: "All books deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBook: createBook,
  listBooks: listBooks,
  getBook: getBook,
  getBookByTitle: getBookByTitle,
  editBook: editBook,
  deleteBook: deleteBook,
  deleteBookByTitle: deleteBookByTitle,
  deleteAllBooks: deleteAllBooks,
};
