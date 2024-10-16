const {Sequelize} = require('sequelize')
const connection = new Sequelize(process.env.MYSQL_URI)

try {
    connection.authenticate()
console.log('successfully connected to database.')
} catch (error) {
    console.log(error)
}

module.exports = connection