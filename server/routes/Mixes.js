const express = require('express')
const router = express.Router()
const { Mixes } = require('../models')


router.get('/', async (req, res) => {
    try{
        const allMixes = await Mixes.findAll()
        res.json(allMixes)
    } catch (error){
        console.log(error.message)
    }
    
})

router.post('/', async (req, res) => {
    const mix = req.body
    await Mixes.create(mix)
    res.json(mix)
})

module.exports = router