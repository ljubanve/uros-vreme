const express = require("express")
const path = require("path")
const cors = require("cors")

const app = express()

app.use(cors())

app.get("/api/v1/vreme", (req, res) => {
    const fajl = path.join(__dirname, "weather_data.json")
    res.status(200).sendFile(fajl)
})

app.listen(3000, () => {
    console.log(`Server je pokrenut na: http://localhost:3000`)
})