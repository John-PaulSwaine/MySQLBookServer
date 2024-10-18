const Book = require('../models/bookModel');

const deleteAllBooks = async (req, res) => {
    try {
        const output = await Book.destroy({
            where: {},
            truncate: true // This option ensures that the table is reset and the auto-increment counter is reset
            // had to get assistance through chatGPT for the "truncate: true" part of my code to ensure that the auto-increment counter would reset.
        });
        res.status(200).json({ message: 'All books deleted successfully', deleted: output });
    } catch (error) {
        res.status(418).json(error);
        console.log(error);
    }
};

module.exports = deleteAllBooks;
