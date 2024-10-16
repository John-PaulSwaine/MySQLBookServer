const connection = require('../connection')
const {DataTypes} = require('sequelize')

const Book = connection.define('Book', {
    bookID: {type:DataTypes.INTEGER, unique: true, allowNull: false, primaryKey: true, autoIncrement: true},
    title: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    author: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'},
    genre: {type:DataTypes.STRING, allowNull: false, defaultValue: 'not specified'}
})

module.exports=Book