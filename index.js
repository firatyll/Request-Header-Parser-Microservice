const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
app.use(cors())

const routes = require("./routes/reqheaderparser")

app.use(routes)

app.listen(process.env.PORT , ()=>{
    console.log(`Running on Port ${process.env.PORT}`)
})