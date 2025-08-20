const express = require("express")
const app = express()
const port = 3001
const cors = require('cors')

app.use(cors())
app.use(express.json())

const db = require("./models");

const eventsRouter = require('./routes/Events.js')
const mixesRouter = require('./routes/Mixes.js')
const stylesRouter = require('./routes/Styles.js')
const eventSocialsRotuer = require("./routes/EventSocials.js")
const socialsRouter = require('./routes/Socials.js')

app.use("/events", eventsRouter)
app.use("/mixes", mixesRouter)
app.use("/styles", stylesRouter)
app.use("/eventsocials", eventSocialsRotuer)
app.use("/socials", socialsRouter)


db.sequelize.sync().then(() =>{
    app.listen(port, () =>{
        console.log(`Server running on server ${port}`)
    })
})
