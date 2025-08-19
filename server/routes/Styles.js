const express = require("express")
const router = express.Router()
const { Styles } = require('../models')

router.get('/', async (req, res) =>{
    try{
        const allStyles = await Styles.findAll()
        res.json(allStyles)
    } catch(e){
        console.log(e.message)
    }
})

router.post('/', async (req, res) => {
    try{
        const style = req.body
        await Styles.create(style)
    }catch(e){
        console.log(`Could not create new style: ${e.message}`)
    }
})

router.delete('/byId/:id', async(req, res) => {
    try{
        const id = req.params.id
        await Styles.destroy({
            where: {
                stlyeId: id
            }
        })
        res.status(200).json({ message: 'Style  deleted successfully' })
    }catch(e){
        console.error('Error deleting style:', err)
        res.status(500).json({ error: 'Internal server error' })
    }
})

module.exports = router