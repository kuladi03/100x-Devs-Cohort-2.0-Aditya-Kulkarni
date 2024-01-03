const express = require('express')

const app = express()

app.get("/health-checkup",(req,res) => {
    const username = req.headers.username
    const password = req.headers.password
    const kidneyId = req.query.kidneyId

    if(username != 'kuladi' || password != "ADITYA"){
        res.status(400).json({
            msg : "Atuhentication Failed"
        })
        return 
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg : "Your kidneys are not healthy"
        })
        return
    }

    res.send("You logged in succesfully & your kidneys are healthy")
})

app.listen(3000)