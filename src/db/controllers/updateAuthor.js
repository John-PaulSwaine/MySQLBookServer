const { where } = require('sequelize')
const Book = require('../models/bookModel')

const updateAuthor = async (request, res) => {
    try {
        const outcome = await Book.update(
            {author: request.body.author},            
            {where: {
                title : request.body.title
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