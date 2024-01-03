const express = require('express')
const zod = require('zod')
const app = express()

app.get('/', (req,res) => {
    res.send("Hello")
})

app.listen(3000)
