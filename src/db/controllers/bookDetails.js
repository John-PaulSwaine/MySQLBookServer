const Book = require('../models/bookModel')

const bookDetails = async (req, res) => {
    try {
        const output = await Book.findOne({
            title: req.body.title
        })
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = bookDetails