const express = require("express")
const router = express.Router();
const { EventSocials } = require("../models")


router.get('/', async (req, res) =>{
    const allEventSocials = await EventSocials.findAll()
    res.json(allEventSocials)
})

router.post('/', async (req, res) => {
   const social =  req.body
   await EventSocials.create(social)
   res.json(social)
})

router.put('/byId/:id', async (req, res) =>{
    const id = req.params.id
    const {name, platform, link} = res.body
    const social = await EventSocials.findByPk(id)

    if(social){
        social.name =  name
        social.platform = platform
        social.link =  link

        await social.save()
        res.json(social)
    } else {
        console.error('Error updating event socials', err)
        res.status(500).json({error: 'Internal server error'})
    }
})

router.delete('/byId/:id', async (req, res) => {
    const id = req.params.id
    await EventSocials.destroy({
        where: {socialId: id}
    })
})