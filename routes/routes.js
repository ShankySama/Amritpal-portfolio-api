const express = require('express')
const router = express.Router()

router.get('/bio',(req,res)=>res.json({bio:"YO"}));

module.exports = { router }