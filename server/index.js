const express = require("express")
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = require("./models");


const eventsRouter = require('./routes/Events.js')
const mixesRouter = require('../modules/Mixes.js')
//
app.use("/events", eventsRouter)
app.use("/mixes", mixesRouter)



db.sequelize.sync().then(() =>{
    app.listen(port, () =>{
        console.log(`Server running on server ${port}`)
    })
})
