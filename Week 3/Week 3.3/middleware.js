const express = require('express')
const app = express()

function isOldenough(req,res,next){
    const age = req.query.age;
    if(age >= 14){
        next();
    }
    else{
        res.json({
            msg : "You can't ride !!!"
        })
    }
}

app.use(isOldenough);

app.get('/ride1' , function(req,res){
    res.json({
        msg : "You have successfully ridden the ride 1"
    })
})

app.get('/ride2' , function(req,res){
    res.json({
        msg : "You have successfully ridden the ride 1"
    })
})

app.listen(3000)