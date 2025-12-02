const express = require('express');
const fs = require('node:fs')

const app = express();
const port = 3000;

const dataPath = 'busSchedule.json'; 
let busSchedule;

app.get("/fullschedule", (req, res) => {
	res.json(busSchedule);
})

app.get("/getschedule", (req, res) => {
	const id = req.query.id;
	if(!busSchedule[`${id}`]) {
		res.status(404);
	}
	res.json(busSchedule[`${id}`]);
})

app.get("/getschedule_ida", (req, res) => {
	const id = req.query.id;
	if(!busSchedule[`${id}`]) {
		res.status(404);
	}
	res.json(busSchedule[`${id}`].ida)
})

app.get("/getschedule_vuelta", (req, res) => {
	const id = req.query.id;
	if(!busSchedule[`${id}`]) {
		res.status(404);
	}
	res.json(busSchedule[`${id}`].vuelta)
})

fs.readFile(dataPath, (err, data) => {
	if (err) throw err;
	busSchedule = JSON.parse(data);

	app.listen(port, () => {
		if(!busSchedule) throw "data error";
		console.log("API on");
	})
})
