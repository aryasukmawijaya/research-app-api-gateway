var express = require('express');
var router = express.Router()
const apiAdapter = require('./apiAdapter')

const BASE_URL = 'http://35.223.83.146'
const api = apiAdapter(BASE_URL)

router.get('/hello-world', (req, res) => {
    api.get(req.path).then(resp => {
        res.send(resp.data)
    })
})

router.get('/fibonacci-100k', (req, res) => {
    api.get(req.path).then(resp => {
      res.send(resp.data)
    })
})

router.get('/get-10k-row-data', (req, res) => {
    api.get(req.path).then(resp => {
      res.json(resp.data)
    })
})

module.exports = router