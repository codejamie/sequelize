const Book = require("../models/book");

const addBook = async (req,res) => {
    try {
        const result = await Book.create({
            title: req.body.title,
            genre: req.body.genre
        }) 
        console.log(result);
        
        res.status(201).json({
            msg: "Book added successfully!",
            book: result
        })
    } catch (error) {
        console.log(error);
        res.status(418).json({
            msg: "Error see error code",
            error:error.errors[0].message
        })
    } 
}

module.exports = addBook;