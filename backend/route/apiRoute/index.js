const express = require("express")
const route = express.Router()
const authRoute = require("./authRouth")


route.use("auth",authRoute)



module.exports = route