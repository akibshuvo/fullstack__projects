const express = require("express")
const route = express.Router()
const apiRou = require("./apiRoute")

let apibase = process.env.BASEURL

route.use(apibase, apiRou)

module.exports = route