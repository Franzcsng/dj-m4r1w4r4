const express = require('express')
const router = express.Router()
const { Mixes } = require('../modules')


router.get('/', async (req, res) => {
    const allMixes = await Mixes.findAll()
    res.json(allMixes)
})


module.exports = router