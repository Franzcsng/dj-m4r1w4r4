const express = require("express")
const router = express.Router();
const { Events } = require('../models');


router.get('/', async (req, res) =>{
    const allEvents = await Events.findAll()
    res.json(allEvents)
})

router.post('/', async (req, res) =>{
    const event = req.body
    await Events.create(event)
    res.json(event)
})


router.get('/byId/:id', async (req, res) =>{
    const id = req.params.id
    const event = await Events.findByPk(id)
    res.json(event)
})


module.exports = router