const { Router } = require("express");
const booksRoute = Router();
const { 
  createBook, 
  listBooks, 
  editBook, 
  getBook,
  getBookByTitle,
  deleteBook,
  deleteAllBooks  } = require("../controllers/booksController")

// Create a new book
booksRoute.post("/createBook", createBook)

// List all books
booksRoute.get("/listBooks", listBooks)

// Update a book
booksRoute.put("/editBook", editBook)

// Get a book
booksRoute.get("/getBook", getBook)

// Get a book by title
booksRoute.get("/getBookByTitle", getBookByTitle)

// Delete a book
booksRoute.delete("/deleteBook", deleteBook)

// Delete al books
booksRoute.delete("/deleteAllBooks", deleteAllBooks)

module.exports = booksRoute