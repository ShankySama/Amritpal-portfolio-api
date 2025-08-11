require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT ||  1234;
const app = express();

// Home Route
app.get('/',(req,res)=>{
 res.send(`Amritpal's portfolio API's are running.`)
})

app.listen(PORT,()=>{
    console.log('Server is running on:',PORT )
})