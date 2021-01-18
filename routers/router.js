var express = require('express');
var router = express.Router()
var apiRouter = require('./apiService')

router.use((req, res, next) => {
    console.log("Called: ", req.path)
    next()
})

router.use(apiRouter)

module.exports = router