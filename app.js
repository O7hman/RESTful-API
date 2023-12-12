const express = require('express')
const mongoose = require('mongoose')
require('dotenv/config')

const app = express()

// Import routes
const postsRoute = require('./routes/posts.js')

// Setup Midlleware
app.use(express.json())

// Routes
app.use('/posts', postsRoute)

app.get('/',(req, res)=>{
    res.send('Currently at Home')
})
// Connect to DB
async function connect(){
    try{
        await mongoose.connect(process.env.DB_CONNECTION)
        console.log('Connected to DB')
    }catch (err){
        console.log(err.message)
    }
}

connect()

// Server start listening...
app.listen(3000, ()=>{
    console.log('Server is Listening')
})
