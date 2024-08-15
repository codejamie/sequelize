const { Router } = require("express");
const authorsRoute = Router();
const { 
  createAuthor, 
  listAuthors, 
  editAuthor, 
  getAuthor,
  getAuthorByName,
  deleteAuthor,
  deleteAuthorByName,
  deleteAllAuthors  } = require("../controllers/authorsController")

// Create a new author
authorsRoute.post("/createAuthor", createAuthor)

// List all authors
authorsRoute.get("/listAuthors", listAuthors)

// Update a author
authorsRoute.put("/editAuthor", editAuthor)

// Get a author
authorsRoute.get("/getAuthor", getAuthor)

// Get a author by title
authorsRoute.get("/getAuthorByName", getAuthorByName)

// Delete an author
authorsRoute.delete("/deleteAuthor", deleteAuthor)

// Delete an author by name
authorsRoute.delete("/deleteAuthor", deleteAuthorByName)

// Delete all authors
authorsRoute.delete("/deleteAllAuthors", deleteAllAuthors)

module.exports = authorsRoute