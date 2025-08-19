const express = require("express")
const router = express.Router();
const { Events } = require('../models');


router.get('/', async (req, res) =>{
    const allEvents = await Events.findAll()
    res.json(allEvents)
})

router.get('/byId/:id', async (req, res) =>{
    const id = req.params.id
    const event = await Events.findByPk(id)
    res.json(event)
})

router.post('/', async (req, res) =>{
    const event = req.body
    await Events.create(event)
    res.json(event)
})

router.put('/byId/:id', async (req, res) =>{
    const id = req.params.id
    const {eventName, eventAddress, eventDate, eventTime, eventDescription, featuredEvent} = req.body
    const event = await Events.findByPk(id)

    if(event){
        event.eventName =  eventName
        event.eventAddress = eventAddress
        event.eventDate = eventDate
        event.eventTime = eventTime
        event.eventDescription = eventDescription
        event.featuredEvent = featuredEvent

         if (featuredEvent === true) {
            await Events.update(
                { featuredEvent: false },
                {
                    where: {
                        eventId: { [Op.ne]: id },   // not equal to current event
                        featuredEvent: true
                    }
                }
            )
        }

        await event.save()
        res.json(event)

    } else {
        console.error('Error updating event' , err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

router.delete('/byId/:id', async (req, res)=>{
    try{
        const id = req.params.id
        await Events.destroy({
        where: {eventId: id}
        })
        res.status(200).json({ message: "Event deleted succesfully"})
    }catch(e){
        console.error('Error deleting event:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
    
})


module.exports = router