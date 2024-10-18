const Book = require('../models/bookModel')

const updateGenre = async (req, res) => {
    try {
        const outcome = await Book.update(
            {genre: req.body.genre},            
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

module.exports = updateGenre