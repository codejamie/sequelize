const { Router } = require("express");
const booksRoute = Router();
const addBook = require("../controllers/addBook")

booksRoute.post("/addBook", addBook)

module.exports = booksRoute