const mongoose = require('mongoose');
const URI = process.env.MONGO_URI
const connectToDb = () =>{
    mongoose.connect(URI)
    .then(()=>console.log("MongoDB connected"))
    .catch(err=>console.log("Error",err))
}
module.exports = { connectToDb };