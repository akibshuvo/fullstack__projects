const express = require("express")
const secureApi = require("../../middelWare/secureApi")
const registrationController = require("../../controller/reqController")
const route = express.Router()



route.post("/registration", secureApi, registrationController)



module.exports = route