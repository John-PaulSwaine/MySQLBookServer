require ('dotenv').config()
const express = require ('express')
const app = express()
app.use(express.json())


app.get('/health', (req, res)=>{
    res.status(200).send('API is healthy')
})

app.listen(5001, ()=>{
    console.log('server listening on port 5001.')
})