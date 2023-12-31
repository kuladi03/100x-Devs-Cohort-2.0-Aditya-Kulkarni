// we are creating a HTTP server 
// here we are using express

const express = require('express')
const port = 3000
const app = express()

function calculateSum(n){
	let ans = 0
	for(let i = 0 ; i < n ; i++){
		ans += i
	}
	return ans.toString(); 
}

// req, res => request and respond

app.get('/',function(req,res) {
	const n = req.query.n
	const ans = calculateSum(n)
	res.send(ans)
})
app.listen(port)
