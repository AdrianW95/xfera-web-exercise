const fs = require('fs')
const express = require('express')
const path = require('path')
const cors = require('cors')
const e = require('express')

const app = express()
app.use(cors())

const readDataFromFile = () => {
	const rawData = fs.readFileSync(__dirname + '/data.json')
	return JSON.parse(rawData)
}

app.use(express.static(path.join(__dirname, 'client/build')))

// Auxiliary function for coin value manipulation
const updateCoins = () => {
	const coins = readDataFromFile().coins
	let randomIncrement = 0
	coins.forEach(e => {
		randomIncrement = Math.floor(Math.random() * 10)
		e.value += randomIncrement
	})
	fs.writeFileSync(__dirname + '/data.json', JSON.stringify({"coins": coins}))
	return coins
}

// GET methods
app.get('/getListEntries', (req, res) => {
	try {
		const updatedCoins = updateCoins()
		res.status(200).send({"coins": updatedCoins})

	} catch (error) {
		console.log('Server error: 500')
		res.status(500).send('Server error: 500')
	}
})

// Start server
const port = process.env.PORT || 5000
app.listen(port)

console.log('App is listening on port ' + port)
