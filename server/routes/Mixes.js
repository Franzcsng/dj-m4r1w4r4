const express = require('express')
const router = express.Router()
const { Mixes } = require('../models')


router.get('/', async (req, res) => {
    const allMixes = await Mixes.findAll()
    res.json(allMixes)
})

router.post('/', async (req, res) => {
    const mix = req.body
    await Mixes.create(mix)
    res.json(mix)
})

module.exports = router