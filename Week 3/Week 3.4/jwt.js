const jwt = require('jsonwebtoken')

const value = {
    name : "Aditya",
    account : 1325846565
}

const token = jwt.sign(value , 'secret')
console.log(token)