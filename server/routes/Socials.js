const express = require("express")
const router = express.Router()
const { Socials } = require("../models")


router.get('/', async(req, res) =>{
    const socials = await Socials.findAll()
    res.json(socials)
})

router.post('/', async(req, res) => {
    const social = req.body
    await Socials.create(social)
    res.json(social)
})

router.put('/byId/:id', async(req, res) => {
    const id = req.params.id
    const {name, platform, link} = req.body
    const social = Socials.findByPk(id)
    
    if(social){
        social.name = name
        social.platform = platform
        social.link = link

        await social.save()
        res.json(social)
    } else{
        console.error("Error updating socials", err)
        res.status(500).json({error: "Internal Server Error"})
    }
})

router.delete('/byId/:id', async (req, res) => {
    const id = req.params.id
    await Socials.destroy({
        where: {socialId: id}
    })
    res.status(200).json({message: "Social Deleted Succesfully"})
})