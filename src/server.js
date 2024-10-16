require ('dotenv').config()
const express = require ('express')
const app = express()
const bookRouter = require('./db/routes/bookRoutes')
const Book = require('./db/models/bookModel')

const syncTables = () => {
    Book.sync({
        alter: true
    })
}

app.use(express.json())
app.use(bookRouter)

app.get('/health', (req, res)=>{
    res.status(200).send('API is healthy')
})

syncTables()

app.listen(5001, ()=>{
    console.log('server listening on port 5001.')
})