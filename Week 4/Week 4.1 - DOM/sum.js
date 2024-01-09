const express = require('express')
const app = express()

app.get('/', (req,res) => {
    let a = req.query.a;
    let b = req.query.b;
    let sum = parseInt(a) + parseInt(b);
    res.json({
        msg : "Sum is : " + sum
    })
})

app.listen(3000);