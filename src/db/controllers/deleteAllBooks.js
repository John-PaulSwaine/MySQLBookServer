const Book = require('../models/bookModel')

const deleteAllBooks = async (req, res) => {
    try {

    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = deleteAllBooks