const express = require('express');
const hbs = require('hbs')

var app = express();

const port = process.env.PORT || 8080;

hbs.registerPartials(__dirname+'/views/partials')

app.set('view engine', 'hbs')
app.use(express.static(__dirname + '/public'));

//hbs.registerHelper('getCurrentYear', () => {
//	return new Date();
//})

//hbs.registerHelper('message', (text) => {
//	return text.toUpperCase();
//})

//hbs.registerHelper('square', (num) => {
//	var sum = num * num
//	return `${num}^2 = ${sum}`;
//})

app.get('/', (request, response) => {
	response.render('home.html')
});

app.get('/info', (request, response) => {
	response.render('login.html')
});

app.get('/404', (request, response) => {
	response.send({
		error: 'Page not found'
	})
})

app.listen(port, () => {
	console.log(`Server is up on the port ${port}`);
});