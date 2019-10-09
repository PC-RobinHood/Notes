import express from "express";

const app = express()
const PORT = 4300
app.get("/", (req, res) => {
    res.json({
        message: "Notes API"
    })
})
app.listen(PORT, () => {
    console.log('Server is listening on PORT ${PORT}')
})