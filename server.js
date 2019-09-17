const express = require('express');
const app = express();
const axios = require('axios')

const port = 5000;

app.get('/api/current-location', (req, res) => {
	axios.get('https://api.ipdata.co/?api-key=test')
		.then(function (response) {
			console.log('Location data: ', response.data);
			res.json(response.data);
		})
		.catch(function (err) {
			console.error('Location ERROR!', err.response.data.message);
			res.status(err.response.status).send({cod: err.response.status, message: err.response.data.message});
			throw new Error(err.response);
		})
})

app.get('/api/weather', (req, res) => {
	const city = encodeURIComponent(req.query.city);
	const countryCode = ',' + encodeURIComponent(req.query.country) || '';
	const API_KEY = '315bfb21a64943c67a92e2da0022fdbe';

	axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}${countryCode}&APPID=${API_KEY}&units=metric`)
		.then(function (response) {
			console.log('Weather data: ', response.data);
			res.json(response.data)
		})
		.catch(function (err) {
			console.error('Weather ERROR!', err.response.data.message);
			res.status(err.response.data.cod).send(err.response.data);
			throw new Error(err.response);
		})
})

app.listen(port, (err) => {
	if (err) {
		console.error(err)
	};
	console.log('Listening on port ' + port);
})