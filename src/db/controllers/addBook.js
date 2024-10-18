const Book = require('../models/bookModel')

const addBook = async (req, res) => {
    try {
        const output = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })
        res.status(200).json({msg: `${req.body.title} by ${req.body.author} has successfully been added.`})
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = addBook