const express = require("express")
const router = require("./routes/index")
const app = express()
const PORT = 3000
const cors = require('cors')

app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(router)
app.listen(PORT, () => {
    console.log("app is running on http://localhost:" + PORT)
})

module.exports = app