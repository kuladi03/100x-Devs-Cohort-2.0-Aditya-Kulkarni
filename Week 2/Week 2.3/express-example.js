const express = require('express')
const port = 3000
const app = express()

app.use(express.json())

const users = [{
	name : "John",
	kideneys :[{
		healthy : false
		},
		{
		healthy : true
		}
		]
	}]

app.get('/',(req,res) => {
	const johnkideneys = users[0].kideneys
	const numberofkideneys = johnkideneys.length
	let healthykideneys = 0
	for(let i = 0 ; i < numberofkideneys ; i++){
		if(users[0].kideneys[i].healthy){
			healthykideneys = healthykideneys + 1
		}
	}
	const unhealthykideneys = numberofkideneys - healthykideneys
	res.json({
		numberofkideneys,
		healthykideneys,
		unhealthykideneys
	})
})

app.listen(port)

app.post('/',(req,res) => {
	const ishealthy = req.body.ishealthy
	users[0].kideneys.push({
		healthy : ishealthy
		})
	res.json({
		msg : "Done!"
	})

})	

app.put('/',(req,res) => {
	for(let i = 0 ; i < users.length ; i++){
		users[0].kideneys[i].healthy = true
	}
	res.json({
		msg : "Done!"
	})
})


app.delete('/',(req,res) => {
	const newhealthykideneys = []
	for(let i = 0 ; i < users[0].kideneys.length ; i++){
		if(users[0].kideneys[i].healthy == true){
			newhealthykideneys.push({
				healthy : true
			})
		}
	}
	users[0].kideneys = newhealthykideneys

	res.json({
		msg : "Done!"
	})
})
