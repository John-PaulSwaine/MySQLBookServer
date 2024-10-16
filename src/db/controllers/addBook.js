const Book = require('../models/bookModel')
const bookModel = require('../models/bookModel')

const addBook = async (req, res) => {
    try {
        const output = await Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre
        })
        res.status(400).json({msg: `${req.body.title} by ${req.body.author} has successfully been added.`})
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = addBook