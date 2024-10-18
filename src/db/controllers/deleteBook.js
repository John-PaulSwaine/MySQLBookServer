const Book = require('../models/bookModel')

const deleteBook = async (req, res) => {
    try {
        const output = await Book.destroy(            
            {where: {
                title : req.body.title
            }}
        )
        res.status(200).json(output)
        console.log(output)
    } catch (error) {
        res.status(418).json(error)
        console.log(error)
    }
}

module.exports = deleteBook