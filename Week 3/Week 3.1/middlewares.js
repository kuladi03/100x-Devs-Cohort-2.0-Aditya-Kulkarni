const express = require('express')
const app = express()

function usermimddleware(req,res,next){
    const username = req.headers.username
    const password = req.headers.password

    if(username != 'kuladi' || password != "ADITYA"){
        res.status(403).json({
            msg : "Atuhentication Failed"
        })
    }
    else{
        next()
    }
}

function kidneymiddleware(req,res,next){
    const kidneyId = req.query.kidneyId

    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({
            msg : "Your kidneys are not healthy"
        })
    }
    next()
}

app.get("/Health-Checkup" , usermimddleware , kidneymiddleware , function(req,res){
    res.send("You logged in succesfully & your kidneys are healthy")
})

app.listen(3000)


