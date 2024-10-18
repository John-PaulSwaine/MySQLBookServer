const Book = require('../models/bookModel')

const updateAuthor = async (req, res) => {
    try {
        const outcome = await Book.update(
            {author: req.body.author},            
            {where: {
                title : req.body.title
            }}
        ) 
        res.status(200).json(outcome)
        console.log(outcome)
    } catch (error) {
        res.status(418)
        console.log(error)
    }
}

module.exports = updateAuthor