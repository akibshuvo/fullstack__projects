require('dotenv').config()
const express = require("express")
var cors = require('cors')
const app = express()
const secureApi = require("./middelWare/secureApi")
const { route } = require('./route')

app.use(cors())
app.use(express.json())
app.use(route)


app.post("/api/v1/auth/registration", secureApi, (req, res)=>{
    console.log(req.body)
})

app.listen(8000, ()=>{
    console.log("port connect")
})