const Author = require("../models/author");

const createAuthor = async (req, res) => {
  try {
    const author = await Author.create(req.body);
    res.status(201).json({ message: "Author added successfully", author });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get all authors in db
const listAuthors = async (req, res) => {
  try {
    const authors = await Author.findAll();
    res.status(201).json({ authors });
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get a specific author by name
const getAuthorByName = async (req, res) => {
  try {
    const author = await Author.findOne({ where: { name: req.query.name } });
    if (author) {
      return res.status(200).json({ author });
    } else {
      return res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Get a specific author by unique id
const getAuthor = async (req, res) => {
  try {
    const author = await Author.findOne({ where: { id: req.query.id } });   
    if (author) {
      res.status(200).json({ author });
    } else {
      return res.status(404).json({ message: "Author id not found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

// Edit and update a author
const editAuthor = async (req, res) => {
  try {
    const id  = req.query.id
    const body = req.body;

    const editedAuthor = await Author.update(body, {
      where: { id: id },
    });

    if (editedAuthor) {
      return res.status(200).json({ author: editedAuthor });
    } else {
      return res.status(422).json({ message: "Unprocessable Content" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete an author by id 
const deleteAuthor = async (req, res) => {
  try {
    const id = req.query.id;
    const deletedAuthor = await Author.destroy({ where: { id: id } });
    if (deletedAuthor) {
      return res.status(200).json({ message: "Author deleted successfully" });
    } else {
      return res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete a specific author by name 
const deleteAuthorByName = async (req, res) => {
  try {
    const name = req.query.name;
    const deletedAuthor = await Author.destroy({
      where: {name: name}
    });

    if (deletedAuthor) {
      return res.status(200).json({ message: "Author deleted successfully" });
    } else {
      return res.status(404).json({ message: "Author not found" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete all authors
const deleteAllAuthors = async (req, res) => {
  try {
    const deletedAuthors = await Author.destroy({
      where: {},
    });

    if (deletedAuthors) {
      return res
        .status(200)
        .json({ message: "All authors deleted successfully" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createAuthor: createAuthor,
  listAuthors: listAuthors,
  getAuthor: getAuthor,
  getAuthorByName: getAuthorByName,
  editAuthor: editAuthor,
  deleteAuthor: deleteAuthor,
  deleteAuthorByName: deleteAuthorByName,
  deleteAllAuthors: deleteAllAuthors,
};
