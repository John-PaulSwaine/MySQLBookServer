const Book = require('../models/bookModel')

const listAllBooks = async (req, res) => {
    try {
        const output = await Book.findAll()
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = listAllBooks