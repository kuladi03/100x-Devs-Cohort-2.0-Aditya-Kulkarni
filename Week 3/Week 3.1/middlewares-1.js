const express = require('express')
const zod = require('zod')
const app = express()

const schema = zod.array(zod.number())
app.use(express.json())

app.post('/health-checkup' , function(req,res){
    const kidneys = req.body.kidneys
    const response = schema.safeParse(kidneys)
    // const kidneyLength = kidneys.length
    if(!response.success){
        res.status(411).json({
            msg : "input is invalue"
        })
    }
    else{
        res.send({
            response
        })
    }

    // res.send("You have " + kidneyLength + " kidneys")
})

// app.use(function(err,req,res,next){
//     res.json({
//         msg : "Sorry something is wrong with our servers"
//     })
// })

app.listen(3000)