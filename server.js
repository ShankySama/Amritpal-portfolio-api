require('dotenv').config()
const { connectToDb } = require('./db/connection')
const bodyParser = require('body-parser');
const { router } = require('./routes/routes');
const express = require('express');

const PORT = process.env.PORT ||  1234;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api',router)

// DB Connection
connectToDb();
// Home Route
app.get('/',(req,res)=>{
    res.send(`Amritpal's portfolio API's are running.`)
})

app.listen(PORT,()=>{
    console.log('Server is running on:',PORT )
})