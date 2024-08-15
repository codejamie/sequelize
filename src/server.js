require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// Books
const bookRoutes = require("./routes/bookRoutes");
const Book = require("./models/book")

// Authors
const authorRoutes = require("./routes/authorRoutes");
const Author = require("./models/author")

app.use(express.json());
app.listen(port, () => console.log(`Server started on port ${port}`));
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "Server API ready"
  });
});

app.use(bookRoutes);
app.use(authorRoutes);

function syncTables() {
    Book.sync({
      alter:true
    }),
    Author.sync({
      alter: true
    })
}

syncTables();